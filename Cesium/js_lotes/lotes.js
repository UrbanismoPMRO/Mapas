import { TokenCesium, varPontoSelecionado } from './config.js';
import { LocalAlvo, carregarLimite, carregaEdificio, carregaLoteamento, viewer, exibirAlerta, carregarModelo3D, AlturaEdificacao, AlturaSoleira, carregaRotulo, VistaSuperior, toggleMap, Vista3d, baixarPoligono, pegaObjetoClicado, baixarPoligonoSelecionado, downloadKml } from './funcoes.js';
import { selMarcoAstronomico, selTeste } from './MarcosAstron.js';
import { Medir, ApagarMedicao, DesligarMedir } from './Medir.js'
// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account

Cesium.Ion.defaultAccessToken = TokenCesium;


//>Configurações diversas, algumas já vieram no codigo inicial
viewer.clock.shouldAnimate = false;
viewer.shadows = true;
viewer.terrainShadows = Cesium.ShadowMode.ENABLED;
viewer.scene.globe.depthTestAgainstTerrain = true; //desativa teste de profundidade para que o aplicativo não verifique o solo, isso serve para que a linha de limite não fique sob o solo.

//Carrega  o modelo de terreno do Cesium Ion e o openstreemap como alternativas para visualização


// Initialize the Cesium Viewer in the HTML element with the ID `cesiumContainer`    // Fly the camera to San Francisco at the given longitude, latitude, and height.

viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(varPontoSelecionado.varLongitude, varPontoSelecionado.varLatitude, varPontoSelecionado.varAltura),
    orientation: {
        heading: Cesium.Math.toRadians(0.0), // Direção (Norte)
        pitch: Cesium.Math.toRadians(-90.0), // Olhando para baixo (topo)
        roll: 0.0
    },
    //duration: 0 // Duração em segundos
});

let Loteshandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
let LotespickedObject;
//Carregar Geometrias Essenciais
carregarLimite();
//pegaObjetoClicado();

Lotesteste2();
LotescarregaLoteamento();
LotespegaObjetoClicado();


function Lotesteste2() {
    // 2. Carregar o arquivo GeoJSON
    const dataSourcePromise = viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load('./Geometrias/Lotes_Polilines.geojson', {
            // Cor da borda (stroke)
            stroke: Cesium.Color.RED,
            // Cor de preenchimento (fill)
            fill: Cesium.Color.YELLOW.withAlpha(0.3), // Alpha adicionado para transparência opcional
            // Largura da linha
            strokeWidth: 3,
            clampToGround: true
        })
    );

}



function LotescarregaLoteamento() {
    //  Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/Lotes_Polilines.geojson', {
    //const VarEdificio = Cesium.GeoJsonDataSource.load('./Geometrias/Lotes_Poligonos.geojson', {

    const dataSourcePromise = viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load('./Geometrias/Lotes_Poligonos.geojson', {
            clampToGround: true
        })
    );

    dataSourcePromise.then(function (dataSource) {
        const entities = dataSource.entities.values;

        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];

            if (entity.polygon) {
                // 1. Garante que o preenchimento esteja ativo
                entity.polygon.fill = true;
                entity.polygon.outline = true; // Opcional: ativa o contorno do polígono
                entity.polygon.outlineColor = Cesium.Color.BLACK; // Opcional: define a cor do contorno

                // 2. Define a cor amarela com 30% de transparência (alfa 0.7)
                // Usar ColorMaterialProperty garante a aplicação correta do material
                entity.polygon.material = new Cesium.ColorMaterialProperty(
                    Cesium.Color.YELLOW.withAlpha(0.3)
                );

                // 3. Configuração da etiqueta e posição
                const labelText = entity.properties.Name.getValue();

                // Obtém as posições para calcular o centro
                const hierarchy = entity.polygon.hierarchy.getValue();
                const positions = hierarchy.positions || hierarchy;
                const center = Cesium.BoundingSphere.fromPoints(positions).center;

                entity.position = center;
                entity.label = {
                    text: labelText, // Substitua pelo valor desejado, por exemplo: labelText
                    font: "12pt sans-serif",
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    outlineWidth: 2,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                };
            }
        }
        viewer.zoomTo(dataSource);
    });


}   


function LotespegaObjetoClicado() {
    var mousePosition;
    var varCartesiano;
    var varCartografico;
    // 4. Capturar a posição do clique (2D - pixeis)
    Loteshandler.setInputAction(function (click) {
        // 4. Selecionar o objeto clicado
        LotespickedObject = viewer.scene.pick(click.position);
        // 5. Verificar se foi um polígono
        // 4. Capturar a posição do clique (2D - pixeis)
        const mousePosition = click.position;
        if (Cesium.defined(mousePosition)) {
            // 5. Converter a posição de tela para a superfície do elipsoide (3D - ECEF)
            varCartesiano = viewer.camera.pickEllipsoid(mousePosition, viewer.scene.globe.ellipsoid);
            if (Cesium.defined(varCartesiano)) {
                // 6. Converter de ECEF para Cartográfico (Latitude/Longitude em Radianos)
                varCartografico = Cesium.Cartographic.fromCartesian(varCartesiano);
                // 7. Converter Radianos para Graus
                varPontoSelecionado.varLongitude = Cesium.Math.toDegrees(varCartografico.longitude);
                varPontoSelecionado.varLatitude = Cesium.Math.toDegrees(varCartografico.latitude);
                varPontoSelecionado.varAltura = viewer.scene.globe.getHeight(varCartografico); // Opcional: altura do terreno
                console.log(`Longitude: ${varPontoSelecionado.varLongitude}, Latitude: ${varPontoSelecionado.varLatitude}, Altura: ${varPontoSelecionado.varAltura}`);
            }
        }
        LotesbaixarPoligonoSelecionado();
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    
}

//Download do poligono selecionado
function LotesbaixarPoligonoSelecionado() {
    // Verificar se uma entidade foi clicada
    if (Cesium.defined(LotespickedObject) && LotespickedObject.id instanceof Cesium.Entity) {
        var entity = LotespickedObject.id;
        console.log("Entidade selecionada:", entity.name);

        //alert("O polígono selecionado será baixado em formato KML.");
        var resposta = confirm("Deseja baixar o polígono selecionado?");
        if (resposta == true) {
            console.log("Usuário optou por seguir.");
            // Coloque aqui o código para seguir
        } else {
            console.log("Usuário cancelou.");
            // Coloque aqui o código de cancelamento
            return; // Sai da função se o usuário cancelar
        }

        // 2. Criar uma coleção temporária apenas com a entidade clicada
        var entityCollection = new Cesium.EntityCollection();
        entityCollection.add(entity);

        // 3. Exportar a entidade para KML
        Cesium.exportKml({
            entities: entityCollection
        }).then(function (result) {
            // result.kml é uma string XML
            LotesdownloadKml(entity.name || 'entidade', result.kml);
        });
    }
}

function LotesdownloadKml(filename, kmlContent) {
/* Esta parte comentada foi uma função sugerida pela ia, mas optei pela que já estava funcionando que é a que está logo abaixo.
    var blob = new Blob([kmlContent], { type: 'application/vnd.google-earth.kml+xml' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename + '.kml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
*/
  var blob = new Blob([kmlString], { type: 'application/vnd.google-earth.kml+xml' });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = name + '.kml';
  a.click();
  window.URL.revokeObjectURL(url);
}
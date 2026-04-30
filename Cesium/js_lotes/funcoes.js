import { varPontoSelecionado } from "./config.js";
import { handler } from "./index.js";
import { selMarcoAstronomico, selTeste } from './MarcosAstron.js';


// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    projectionPicker: true,
    terrain: Cesium.Terrain.fromWorldTerrain(),
    shadows: true, // Habilita sombras para entidades/primitivos
    terrainShadows: Cesium.ShadowMode.ENABLED // Habilita sombras no terreno
});

//inicializa a base OSM para visualização alternativa
// 1. Adicionar OSM inicialmente oculto
const osmLayer = viewer.imageryLayers.addImageryProvider(
    new Cesium.OpenStreetMapImageryProvider({
        url: 'https://tile.openstreetmap.org/',
    })
);
osmLayer.show = false;

let CotaSoleiraAtual = 0; //armazena a cota da soleira depois de ser alterada, para que a função de alterar a cota de soleira possa usar esse valor atualizado para calcular a nova altura do edifício, caso o usuário queira alterar a cota de soleira mais de uma vez.
let pickedObject;

// Criar o manipulador de eventos de clique
function pegaObjetoClicado() {
    var mousePosition;
    var varCartesiano;
    var varCartografico;
    // 4. Capturar a posição do clique (2D - pixeis)
    handler.setInputAction(function (click) {
        // 4. Selecionar o objeto clicado
        pickedObject = viewer.scene.pick(click.position);
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
        //habilitar a função abixo para baixar poligonos clicados
        baixarPoligonoSelecionado();

    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}


//Determina o local de visualização inicial da câmera
const LocalAlvo = {
    destination: Cesium.Cartesian3.fromDegrees(-41.934365, -22.554048, 1400),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
    }
};

function carregarLimite() {
    const geoJsonDataSource = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/LimiteLinha4326Original.geojson', {
        clampToGround: true
    });
    // Adicionar ao visualizador e estilizar
    geoJsonDataSource.then(function (dataSource) {
        viewer.dataSources.add(dataSource);
        // Estilizar o polígono
        const entities = dataSource.entities.values;
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            entity.polyline.material = Cesium.Color.ORANGE; // Cor preenchimento
            entity.polyline.outline = true;
        }
    });
}

//SEM USO: Teste para baixar um polígono já definido no código: sem uso atualmente
async function baixarPoligono(viewer, filename = 'Edificio_BlocoDuplo.kml') {
    try {
        // 1. Exporta as entidades para uma string XML/KML
        const result = await Cesium.exportKml({
            entities: viewer.entities,
        });

        // 2. Cria um Blob com o conteúdo XML
        const blob = new Blob([result.kml], { type: 'application/vnd.google-earth.kml+xml' });

        // 3. Cria um link temporário no DOM para disparar o download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;

        // 4. Simula o clique e limpa o elemento
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log("Download do KML iniciado com sucesso.");
    } catch (error) {
        console.error("Erro ao exportar KML:", error);
    }
}

//Download do poligono selecionado
function baixarPoligonoSelecionado() {
    // Verificar se uma entidade foi clicada
    if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
        var entity = pickedObject.id;
        console.log("Entidade selecionada:", entity.name);

        if (Cesium.defined(entity.polygon)) {
            console.log("O objeto clicado é um Polígono.");
        } else if (Cesium.defined(entity.polyline)) {
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
                downloadKml(entity.name || 'entidade', result.kml);
            });
        }



    }
}

//Para baixar polígono selecionado: relacionada a função "baixarPoligonoSelecionado"
function downloadKml(filename, kmlString) {
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
    a.download = 'Lote.kml';
    a.click();
    window.URL.revokeObjectURL(url);
}

function carregaloteskml() {
    Cesium.KmlDataSource.load('./Geometrias/Lotes_Poligonos.kml', {
        camera: viewer.camera,
        canvas: viewer.canvas,
        clampToGround: true,

    }).then(function (dataSource) {

        viewer.dataSources.add(dataSource);
        viewer.zoomTo(dataSource);
        console.log('Arquivo KML carregado com sucesso!');
    });
}

function carregaLoteamento() {
    //  Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/Lotes_Polilines.geojson', {
    //const VarEdificio = Cesium.GeoJsonDataSource.load('./Geometrias/Lotes_Poligonos.geojson', {

 const dataSourcePromisePolylines = viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load('./Geometrias/Lotes_Poligonos.geojson', {
            clampToGround: true
        })
    );

    dataSourcePromisePolylines.then(function (dataSource) {
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
                    Cesium.Color.YELLOW.withAlpha(0.2)
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
    });


    const dataSourcePromise = viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load('./Geometrias/Lotes_Polilines.geojson', {
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
    });

   




}

//tstes para inserir modelo 3d
function carregarModelo3D() {
    const position = Cesium.Cartesian3.fromDegrees(
        varPontoSelecionado.varLongitude, // Longitude
        varPontoSelecionado.varLatitude, // Latitude
        varPontoSelecionado.varAltura        // Altitude em metros
    );
    const entity = viewer.entities.add({
        position: position,
        model: {
            uri: 'https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/Prisma1.glb',
            scale: 1.0, // Ajuste a escala se necessário
            //        minimumPixelSize: 64 // Tamanho mínimo na tela
        }
    });
    viewer.zoomTo(entity);
}

function AlturaSoleira() {
    // Função para alterar a altura de TODOS os polígonos
    let totalPoligonosAlterados = 0;
    const CotaSoleira = parseFloat(document.getElementById("boxCotaSoleira").value); //pega o valor da cota de soleira no formulário
    // Iterar sobre todos os dataSources
    for (let i = 0; i < viewer.dataSources.length; i++) {
        const dataSource = viewer.dataSources.get(i);
        const entities = dataSource.entities.values;
        // Iterar sobre todas as entidades do dataSource
        for (let j = 0; j < entities.length; j++) {
            const entity = entities[j];
            if (entity.polygon) {
                var AlturaAtualSemSoleira = 0;
                const AlturaAtual = entity.polygon.extrudedHeight || 0; // Obtém a altura atual (ou 0 se não estiver definida)
                if ((AlturaAtual - CotaSoleiraAtual) <= 0) {
                    AlturaAtualSemSoleira = 0;
                    console.log('<=0');
                } else {
                    AlturaAtualSemSoleira = AlturaAtual - CotaSoleiraAtual; // Calcula a altura atual sem a cota de soleira
                    console.log('>0');
                }
                const AlturaFinal = CotaSoleira + AlturaAtualSemSoleira; // Calcula a nova altura somando a cota de soleira com a altura atual do edifício   
                entity.polygon.extrudedHeight = AlturaFinal;
                totalPoligonosAlterados++;
                console.log('altura final: ' + AlturaFinal);
            }

            // if (entity.polygon) {
            //     const AlturaAtual = entity.polygon.extrudedHeight || 0; // Obtém a altura atual (ou 0 se não estiver definida)
            //     const AlturaAtualSemSoleira = AlturaAtual - CotaSoleiraAtual; // Calcula a altura atual sem a cota de soleira
            //     const AlturaFinal = CotaSoleira + AlturaAtualSemSoleira; // Calcula a nova altura somando a cota de soleira com a altura atual do edifício   
            //     entity.polygon.extrudedHeight = AlturaFinal;
            //     totalPoligonosAlterados++;
            //     console.log('altura final: ' + AlturaFinal);
            // }


            console.log('Total de polígonos alterados: ' + totalPoligonosAlterados);
        }
    }
    CotaSoleiraAtual = parseFloat(document.getElementById('boxCotaSoleira').value);
}

function AlturaEdificacao() {
    const opcaoSelecionada = event.target.value;
    if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
        const entity = pickedObject.id;

        // --- AQUI ALTERAMOS A PROPRIEDADE APENAS DESTE POLÍGONO ---
        const CotaSoleira = parseFloat(document.getElementById("boxCotaSoleira").value); //pega o valor da cota de soleira no formulário
        const ConstAltura = parseFloat(document.getElementById("boxAlturaEdif").value); //pega o valor da altura no formulário
        const AlturaFinal = CotaSoleira + ConstAltura; //calcula a altura final somando a cota de soleira com a altura do edifício
        entity.polygon.extrudedHeight = AlturaFinal; //aplica a altura final na extrusão do polígono
    }
    //const entities = dataSource.entities.values;
    //for (let i = 0; i < entities.length; i++) {
    //    const entity = entities[i];
    //}
}

function carregaRotulo() {
    const VarEdificio = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/Edificio_BlocoDuplo.geojson', {
        clampToGround: true
    }); //orignial, antes de abrir arquivo pela janela de carregamento de arquivos


    VarEdificio.then(function (dataSource) {
        viewer.dataSources.add(dataSource);
        // Zoom para o polígono
        viewer.zoomTo(dataSource);
        const ConstAltura = parseFloat(document.getElementById("boxAlturaEdif").value); //pega o valor da altura no formulário
        const entities = dataSource.entities.values;
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];

            const name = 'Daniel';
            entity.label = {
                text: name,
                font: '14px sans-serif',
                showBackground: true,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 5000000), // Oculta zoom alto
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, -9)
            };

            switch (i) {
                case 0:
                    entity.polygon.material = Cesium.Color.BLUE.withAlpha(1.0); // Cor preenchimento
                    break;
                case 1:
                    entity.polygon.material = Cesium.Color.RED.withAlpha(1.0); // Cor preenchimento
                    break;
                case 2:
                    entity.polygon.material = Cesium.Color.GREEN.withAlpha(1.0); // Cor preenchimento
                    break;
                case 3:
                    entity.polygon.material = Cesium.Color.ORANGE.withAlpha(1.0); // Cor preenchimento
                    break;
                case 4:
                    entity.polygon.material = Cesium.Color.WHITE.withAlpha(1.0); // Cor preenchimento
                    break;
                case 5:
                    entity.polygon.material = Cesium.Color.BLACK.withAlpha(1.0); // Cor preenchimento
                    break;
                default:
                    entity.polygon.material = Cesium.Color.YELLOW.withAlpha(1.0); // Cor preenchimento
            }
            //entity.polygon.extrudedHeight = ConstAltura;
            //entity.polygon.outline = true;
            //entity.polygon.outlineColor = Cesium.Color.BLACK;
            //entity.polygon.extrudedHeightReference = Cesium.HeightReference.RELATIVE_TO_GROUND; //considera o solo como nivel para a extrusão (altural)
            entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
        }
    });

}

function exibirAlerta() {
    alert("Pare!");
}

export { LocalAlvo, carregarLimite, viewer, carregaLoteamento, baixarPoligono, pegaObjetoClicado, carregaloteskml };

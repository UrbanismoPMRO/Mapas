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

        //enxerto para pegar altura do objeto clicado
        if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
            var entity = pickedObject.id;
            // Verificação do tipo de geometria
            if (Cesium.defined(entity.polygon)) {
                console.log("O objeto clicado é um Polígono.");
            } else if (Cesium.defined(entity.polyline)) {
                console.log("O objeto clicado é uma Polilinha (Polyline).");
            }
            var input = document.getElementById("boxAlturaEdif");
            // Proteção: só acessa extrudedHeight se for um polígono
            var alturaAtual = (entity.polygon && entity.polygon.extrudedHeight ? entity.polygon.extrudedHeight.getValue(Cesium.JulianDate.now()) : 0) - CotaSoleiraAtual;
            if (alturaAtual <= 0) {
                input.value = 0; // Define o valor da caixa de texto como a altura do edifício (ou 0 se não estiver definida)
                console.log('<=0');
            } else {
                input.value = alturaAtual; // Define o valor da caixa de texto como a altura do edifício (ou 0 se não estiver definida)
                console.log('>0');
            }
        }
        //fim do enxerto para pegar altura do objeto clicado

        /*habilitar a função abixo para baixar poligonos clicados
        baixarPoligonoSelecionado();
        */
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

//MarcosAstronõmicos
function AtivaSliderMarcoAstronomico() {
  // Slider de Marcos Astronômicos
  const sliderMarco = document.getElementById('sliderMarcoastronomico');
  const labelMarco = document.getElementById('labelMarco');
  const opcoesMarco = [
    { valor: '', label: 'Selecione' },
    { valor: '1', label: 'Hora Atual' },
    { valor: '2', label: 'Equinócio de Outono: 21/03 - 08h' },
    { valor: '3', label: 'Equinócio de Outono: 21/03 - 16h' },
    { valor: '4', label: 'Solstício de Inverno: 21/06 - 09h' },
    { valor: '5', label: 'Solstício de Inverno: 21/06 - 15h' },
    { valor: '6', label: 'Equinócio de Primavera: 23/09 - 08h' },
    { valor: '7', label: 'Equinócio de Primavera: 23/09 - 16h' },
    { valor: '8', label: 'Solstício de Verão: 22/12 - 07h' },
    { valor: '9', label: 'Solstício de Verão: 22/12 - 17h' }
  ];
  sliderMarcoAstronomico.addEventListener('input', function () {
    const index = this.value;
    labelMarco.textContent = opcoesMarco[index].label;
    selMarcoAstronomico(opcoesMarco[index].valor);
  });
}


//função de alternância entre mpas de Satelite Cesium e OSM
function toggleMap() {
    const baseLayer = viewer.imageryLayers.get(0);
    baseLayer.show = !baseLayer.show; // Inverte base
    osmLayer.show = !baseLayer.show;  // Inverte OSM
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

function VistaSuperior() {
    const NovoAlvo = {
        destination: Cesium.Cartesian3.fromDegrees(varPontoSelecionado.varLongitude, varPontoSelecionado.varLatitude, 300),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-90.0),
        }
    }
    viewer.camera.flyTo(NovoAlvo);
    viewer.projectionPicker.viewModel.switchToOrthographic();
};

function Vista3d() {
    const NovoAlvo = {
        destination: Cesium.Cartesian3.fromDegrees(varPontoSelecionado.varLongitude, varPontoSelecionado.varLatitude, 300),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        }
    }
    viewer.camera.flyTo(NovoAlvo);
    viewer.projectionPicker.viewModel.switchToPerspective();
};

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
    a.download = name + '.kml';
    a.click();
    window.URL.revokeObjectURL(url);
}

function carregaEdificio(ArquivoCarregado) {
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

function carregaLoteamento() {
    // Carregar o arquivo GeoJSON: Loteamento
    const geoJsonDataLoteamento = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/Lotes_Polilines.geojson', {
        clampToGround: true, // Garante que o polígono fique no chão
        stroke: Cesium.Color.GREEN
    });
    // Adicionar ao visualizador e estilizar
    geoJsonDataLoteamento.then(function (dataSource) {
        viewer.dataSources.add(dataSource);
        // Estilizar o polígono
        const entities = dataSource.entities.values;
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            //entity.polygon.material = Cesium.Color.GRAY.withAlpha(0.5); // Cor preenchimento
            entity.polygon.outline = true;
            entity.outlineColor = Cesium.Color.BLACK;
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

export { LocalAlvo, carregarLimite, exibirAlerta, viewer, carregaEdificio, carregaLoteamento, carregarModelo3D, AlturaEdificacao, AlturaSoleira, carregaRotulo, VistaSuperior, toggleMap, Vista3d, baixarPoligono, pegaObjetoClicado, CotaSoleiraAtual, AtivaSliderMarcoAstronomico };
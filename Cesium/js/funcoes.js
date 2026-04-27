import { varPontoSelecionado } from "./config.js";
import { CotaSoleiraAtual, pickedObject } from "./index.js";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    projectionPicker: true,
    terrain: Cesium.Terrain.fromWorldTerrain(),
    shadows: true, // Habilita sombras para entidades/primitivos
    terrainShadows: Cesium.ShadowMode.ENABLED // Habilita sombras no terreno
});

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
            // Verificar se a entidade tem polígono
            if (entity.polygon) {
                const AlturaAtual = entity.polygon.extrudedHeight || 0; // Obtém a altura atual (ou 0 se não estiver definida)
                const AlturaAtualSemSoleira = AlturaAtual - CotaSoleiraAtual; // Calcula a altura atual sem a cota de soleira
                const AlturaFinal = CotaSoleira + AlturaAtualSemSoleira; // Calcula a nova altura somando a cota de soleira com a altura atual do edifício   
                entity.polygon.extrudedHeight = AlturaFinal;
                totalPoligonosAlterados++;
                console.log(AlturaFinal);
            }
        }
    }
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



function exibirAlerta() {
    alert("Pare!");
}

export { LocalAlvo, carregarLimite, exibirAlerta, viewer, carregaEdificio, carregaLoteamento, carregarModelo3D, AlturaEdificacao, AlturaSoleira };

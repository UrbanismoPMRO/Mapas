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

function carregaEdificio() {
    const VarEdificio = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Geometrias/Edificio_BlocoDuplo.geojson', {
        clampToGround: true
    });
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


function exibirAlerta() {
    alert("Pare!");
}

export { LocalAlvo, carregarLimite, exibirAlerta, viewer, carregaEdificio, carregaLoteamento };

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
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

function exibirAlerta() {
    alert("Pare!");
}

export { LocalAlvo, carregarLimite, exibirAlerta, viewer };
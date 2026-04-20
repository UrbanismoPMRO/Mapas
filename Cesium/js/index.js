import { TokenCesium } from './config.js';
import { LocalAlvo, carregarLimite, exibirAlerta, viewer } from './funcoes.js';
    // Your access token can be found at: https://ion.cesium.com/tokens.
    // This is the default access token from your ion account

    Cesium.Ion.defaultAccessToken = TokenCesium;

    // Initialize the Cesium Viewer in the HTML element with the ID `cesiumContainer`    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo(LocalAlvo);

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = await Cesium.createOsmBuildingsAsync();
    viewer.scene.primitives.add(buildingTileset);   

    // Conectar o botão à função
document.getElementById('btnCarregaLimiteSombra').addEventListener('click', () => {
  carregarLimite();
});


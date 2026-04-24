import { viewer } from './funcoes.js';

// 2. Variáveis de estado
let activePoints = [];
let lineEntities = [];
let distanceLabels = [];

// 3. Capturar cliques do mouse
const Medir = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
Medir.setInputAction(function (click) {
    // Converter posição do mouse para coordenadas cartesianas
    const ray = viewer.camera.getPickRay(click.position);
    const cartesian = viewer.scene.globe.pick(ray, viewer.scene);

    if (cartesian) {
        activePoints.push(cartesian);

        if (activePoints.length === 2) {
            // Desenhar Linha
            lineEntities.push(viewer.entities.add({
                polyline: {
                    positions: activePoints,
                    width: 3,
                    material: Cesium.Color.RED
                }
            }));

            // Calcular Distância
            const distance = Cesium.Cartesian3.distance(activePoints[0], activePoints[1]);

            // Exibir medição
            const midpoint = Cesium.Cartesian3.midpoint(activePoints[0], activePoints[1], new Cesium.Cartesian3());
            distanceLabels.push(viewer.entities.add({
                position: midpoint,
                label: {
                    text: (distance).toFixed(2) + 'm',
                    font: '16px sans-serif',
                    fillColor: Cesium.Color.WHITE,
                    outlineColor: Cesium.Color.BLACK,
                    outlineWidth: 2,
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM
                }
            }));

            // Resetar para nova medição
            activePoints = [];
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function ApagarMedicao() {
    // Remover todas as linhas
    for (let entity of lineEntities) {
        viewer.entities.remove(entity);
    }
    lineEntities = [];

    // Remover todos os rótulos
    for (let label of distanceLabels) {
        viewer.entities.remove(label);
    }
    distanceLabels = [];
}

export { Medir, ApagarMedicao };
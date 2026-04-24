import { viewer } from './funcoes.js';

// 2. Variáveis de estado
let activePoints = [];
let lineEntities = [];
let distanceLabels = [];
let previewLine = null; // Linha de pré-visualização que acompanha o mouse
let currentMousePosition = null; // Posição atual do mouse para a pré-visualização

// 3. Capturar cliques do mouse
const Medir = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
Medir.setInputAction(function (click) {
    // Converter posição do mouse para coordenadas cartesianas
    const ray = viewer.camera.getPickRay(click.position);
    const cartesian = viewer.scene.globe.pick(ray, viewer.scene);

    if (cartesian) {
        activePoints.push(cartesian);

        if (activePoints.length === 1) {
            currentMousePosition = activePoints[0]; // Inicializar com o primeiro ponto
            // Após o primeiro clique, iniciar pré-visualização
            // A linha de pré-visualização será atualizada no movimento do mouse
        } else if (activePoints.length === 2) {
            // Remover linha de pré-visualização
            if (previewLine) {
                viewer.entities.remove(previewLine);
                previewLine = null;
            }

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

// 4. Capturar movimento do mouse para pré-visualização
Medir.setInputAction(function (movement) {
    if (activePoints.length === 1) {
        // Converter posição do mouse para coordenadas cartesianas
        const ray = viewer.camera.getPickRay(movement.endPosition);
        const cartesian = viewer.scene.globe.pick(ray, viewer.scene);

        if (cartesian) {
            currentMousePosition = cartesian;
            // Se a linha de pré-visualização ainda não existe, criá-la
            if (!previewLine) {
                previewLine = viewer.entities.add({
                    polyline: {
                        positions: new Cesium.CallbackProperty(function() {
                            return [activePoints[0], currentMousePosition];
                        }, false),
                        width: 2,
                        material: Cesium.Color.YELLOW.withAlpha(0.7) // Linha semi-transparente
                    }
                });
            }
        }
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

function ApagarMedicao() {
    // Remover linha de pré-visualização
    if (previewLine) {
        viewer.entities.remove(previewLine);
        previewLine = null;
    }
    currentMousePosition = null;

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

    // Resetar pontos ativos
    activePoints = [];
}

export { Medir, ApagarMedicao };
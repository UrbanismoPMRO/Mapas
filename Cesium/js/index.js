/*\\\\\\\\SOBRE/////////
pricipais comandos de inicialização do mapa, bem como organizar os escutadores de ações do html e ligá-los a suas respectivas funções
*/


import { TokenCesium, varPontoSelecionado } from './config.js';
import { LocalAlvo, carregarLimite, carregaEdificio, carregaLoteamento, viewer, exibirAlerta, carregarModelo3D, AlturaEdificacao, AlturaSoleira, carregaRotulo, VistaSuperior, toggleMap, Vista3d, baixarPoligono, pegaObjetoClicado, AtivaSliderMarcoAstronomico } from './funcoes.js';
import { Medir, ApagarMedicao, DesligarMedir } from './Medir.js'
import { entityRegistry } from "./importaDXF.js"
// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account

Cesium.Ion.defaultAccessToken = TokenCesium;

//>configura o relogio para coincidir o horario normal sem a diferenca de 3 horas
viewer.animation.viewModel.timeFormatter = function (date, viewModel) {
  date = Cesium.JulianDate.toDate(date);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

//>Configurações diversas, algumas já vieram no codigo inicial
viewer.clock.shouldAnimate = false;
viewer.shadows = true;
viewer.terrainShadows = Cesium.ShadowMode.ENABLED;
viewer.timeline.currentTime = new Cesium.JulianDate(2461397.2083333335)
viewer.timeline.updateFromClock();
viewer.scene.globe.depthTestAgainstTerrain = true; //desativa teste de profundidade para que o aplicativo não verifique o solo, isso serve para que a linha de limite não fique sob o solo.

//Carrega  o modelo de terreno do Cesium Ion e o openstreemap como alternativas para visualização


// Initialize the Cesium Viewer in the HTML element with the ID `cesiumContainer`    // Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo(LocalAlvo);

//manipulador de eventos do mouse para funções de clique, como pegar o objeto clicado e pegar a posição do clique para exibir as coordenadas geográficas do local clicado. O manipulador é criado aqui, mas a função de pegar o objeto clicado e a função de pegar a posição do clique estão na função pegaObjetoClicado(), que é chamada logo abaixo, para que o evento de clique seja capturado e as funções sejam executadas.
export let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

//Carregar Geometrias Essenciais
carregarLimite();
carregaLoteamento();
pegaObjetoClicado();

//viewer.extend(Cesium.viewerCesiumInspectorMixin);

//Carregar Geometrias Essenciais
carregarLimite();
carregaLoteamento();


//vISUALIZAÇÃO 3D
document.getElementById('btn3D').addEventListener('click', () => {
  Vista3d();
  toggleMap();
});


//Menu de Marcos Astronomicos
document.getElementById('sliderMarcoAstronomico').addEventListener('change', (event) => {
  AtivaSliderMarcoAstronomico();
});

//Atribui Extrusão de acrodo com o valor da caixa de texto
document.getElementById('boxAlturaEdif').addEventListener('change', (event) => {
  AlturaEdificacao();
});

document.getElementById('boxCotaSoleira').addEventListener('change', (event) => {
  AlturaSoleira();
  //CotaSoleiraAtual = parseFloat(document.getElementById('boxCotaSoleira').value);
});

//Vista Superior
document.getElementById('btnVistaSuperior').addEventListener('click', () => {
  VistaSuperior();
  toggleMap();
});

//Medir
document.getElementById('btnMedir').addEventListener('click', () => {
  Medir();
});

//Apagar medições
document.getElementById('btnMedirApagar').addEventListener('click', () => {
  ApagarMedicao();
});

//Desligar Medir
document.getElementById('btnDesligarMedir').addEventListener('click', () => {
  DesligarMedir();
});

//carregar arquivo
document.getElementById('btnCarregaArquivo').addEventListener('click', () => {
  document.getElementById('inputArquivo').click();
});

document.getElementById('inputArquivo').addEventListener('change', (event) => {
  const arquivo = event.target.files[0];

  if (arquivo) {
    const extensao = arquivo.name.toLowerCase().split('.').pop();

    if (extensao === 'kml') {
      // Carregar arquivo KML
      const leitor = new FileReader();
      leitor.onload = function (e) {
        const conteudo = e.target.result;
        const blob = new Blob([conteudo], { type: 'application/vnd.google-earth.kml+xml' });
        const url = URL.createObjectURL(blob);

        Cesium.KmlDataSource.load(url, {
          camera: viewer.camera,
          canvas: viewer.canvas,
          clampToGround: true,

        }).then(function (dataSource) {

          viewer.dataSources.add(dataSource);
          viewer.zoomTo(dataSource);
          console.log('Arquivo KML carregado com sucesso!');

          const entities = dataSource.entities.values;

          //enxerto para converter polilinhas em polígonos, para que possam ser extrudados
          entities.forEach(function (entity) {
            // Verifica se é uma linha
            if (entity.polyline) {
              // Obtém as posições (positions) da linha
              const positions = entity.polyline.positions.getValue(Cesium.JulianDate.now());
              // Cria um polígono com as mesmas posições
              dataSource.entities.add({
                polygon: {
                  hierarchy: positions,
                  material: Cesium.Color.RED.withAlpha(0.5), // Estilo do polígono
                  outline: true,
                  outlineColor: Cesium.Color.BLACK,
                  clampToGround: true,
                  shadows: Cesium.ShadowMode.ENABLED

                }
              });
              viewer.zoomTo(dataSource);
            }
          });
          //fim enxerto para converter linhas em poligonos



          for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            if (entity.polygon) {
              entity.polygon.outline = true;
              entity.polygon.outlineColor = Cesium.Color.BLACK;
              //entity.polygon.material = Cesium.Color.BLUE;
              entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
              switch (i) {
                case 0:
                  entity.polygon.material = Cesium.Color.BLUE; // Cor preenchimento
                  break;
                case 1:
                  entity.polygon.material = Cesium.Color.RED; // Cor preenchimento
                  break;
                case 2:
                  entity.polygon.material = Cesium.Color.GREEN; // Cor preenchimento
                  break;
                case 3:
                  entity.polygon.material = Cesium.Color.ORANGE; // Cor preenchimento
                  break;
                case 4:
                  entity.polygon.material = Cesium.Color.WHITE; // Cor preenchimento
                  break;
                case 5:
                  entity.polygon.material = Cesium.Color.BLACK; // Cor preenchimento
                  break;
                default:
                  entity.polygon.material = Cesium.Color.YELLOW; // Cor preenchimento
              }
            }
            // if (entity.polyline) {
            //   entity.polyline.width = 2;
            //   entity.polyline.clampToGround = true;
            //   alert("A geometria carregada não é um polígono, assim não poderá ser extrudada. Apenas polígonos podem ser extrudados, ou seja, elevados a uma altura específica. Linhas e pontos não possuem área para serem extrudados, por isso não terão essa funcionalidade disponível.");

            // }
          }
        })/*.catch(function (erro) {
          alert('Erro ao carregar arquivo KML: ' + erro);
        });*/
      };
      leitor.readAsText(arquivo);

    } else if (extensao === 'geojson' || extensao === 'json') {
      // Carregar arquivo GeoJSON
      const leitor = new FileReader();
      leitor.onload = function (e) {
        const conteudo = e.target.result;

        // Converter string para objeto JSON
        const dados = JSON.parse(conteudo);

        // Carregar no Cesium
        Cesium.GeoJsonDataSource.load(dados, {
          stroke: Cesium.Color.YELLOW,
          fill: Cesium.Color.YELLOW,
          strokeWidth: 2,
          clampToGround: true,
          shadows: true
        }).then(function (dataSource) {
          viewer.dataSources.add(dataSource);
          viewer.zoomTo(dataSource);
          console.log('Arquivo GeoJSON carregado com sucesso!');
          const entities = dataSource.entities.values;
          //dá cor única para cada bloco da edificação
          for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            if (entity.polygon) {
              entity.polygon.outline = true;
              entity.polygon.outlineColor = Cesium.Color.BLACK;
              entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
              switch (i) {
                case 0:
                  entity.polygon.material = Cesium.Color.BLUE; // Cor preenchimento
                  break;
                case 1:
                  entity.polygon.material = Cesium.Color.RED; // Cor preenchimento
                  break;
                case 2:
                  entity.polygon.material = Cesium.Color.GREEN; // Cor preenchimento
                  break;
                case 3:
                  entity.polygon.material = Cesium.Color.ORANGE; // Cor preenchimento
                  break;
                case 4:
                  entity.polygon.material = Cesium.Color.WHITE; // Cor preenchimento
                  break;
                case 5:
                  entity.polygon.material = Cesium.Color.BLACK; // Cor preenchimento
                  break;
                default:
                  entity.polygon.material = Cesium.Color.YELLOW; // Cor preenchimento
              }
            }
            if (entity.polyline) {
              entity.polyline.width = 2;
              entity.polyline.clampToGround = true;
              alert("A geometria carregada não é um polígono, assim não poderá ser extrudada. Apenas polígonos podem ser extrudados, ou seja, elevados a uma altura específica. Linhas e pontos não possuem área para serem extrudados, por isso não terão essa funcionalidade disponível.");
            }
          }
        }).catch(function (erro) {
          alert('Erro ao carregar arquivo GeoJSON: ' + erro);
        });
      };
      leitor.readAsText(arquivo);
    } else {
      alert('Formato de arquivo não suportado. Use .kml ou .geojson');
    }
  }
});

/*BOTÕES ELIMINADOS

document.getElementById('btnCarregarModelo3D').addEventListener('click', () => {
  carregarModelo3D();
});

// Conectar o botão à função
document.getElementById('btnCarregaEdificacao').addEventListener('click', () => {
  carregaEdificio();
});
*/
document.getElementById('btnTeste').addEventListener('click', () => {
//  tanTan = 6;
});

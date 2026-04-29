import { TokenCesium, varPontoSelecionado } from './config.js';
import { LocalAlvo, carregarLimite, carregaEdificio, carregaLoteamento, viewer, exibirAlerta, carregarModelo3D, AlturaEdificacao, AlturaSoleira, carregaRotulo, VistaSuperior, toggleMap, Vista3d, baixarPoligono } from './funcoes.js';
import { selMarcoAstronomico, selTeste } from './MarcosAstron.js';
import { Medir, ApagarMedicao, DesligarMedir } from './Medir.js'
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

//viewer.extend(Cesium.viewerCesiumInspectorMixin);

//###############Pegar clique do mouse sobre o poligono###########
// 3. Criar o manipulador de eventos de clique
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
let pickedObject;
let mousePosition;
let varCartesiano;
let varCartografico;
let CotaSoleiraAtual = 0; //armazena a cota da soleira depois de ser alterada, para que a função de alterar a cota de soleira possa usar esse valor atualizado para calcular a nova altura do edifício, caso o usuário queira alterar a cota de soleira mais de uma vez.

// 4. Capturar a posição do clique (2D - pixeis)
handler.setInputAction(function (click) {
  // 4. Selecionar o objeto clicado
  pickedObject = viewer.scene.pick(click.position);
  // 5. Verificar se foi um polígono
  /////começo enxerto
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
    console.log("Entidade selecionada:", entity.name);
    var input = document.getElementById("boxAlturaEdif");
    var alturaAtual = (entity.polygon.extrudedHeight || 0) - CotaSoleiraAtual; // Obtém a altura atual do edifício (ou 0 se não estiver definida)
    if (alturaAtual <= 0) {
      input.value = 0; // Define o valor da caixa de texto como a altura do edifício (ou 0 se não estiver definida)
      console.log('<=0');
    } else {
      input.value = alturaAtual; // Define o valor da caixa de texto como a altura do edifício (ou 0 se não estiver definida)
      console.log('>0');
    }
  }
  //fim do enxerto para pegar altura do objeto clicado


  ////fim enxerto

  //enxerto pára download do poligono
  // Verificar se uma entidade foi clicada
  /*
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
  ///fim exerto download poligono
  */

}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

//função para download relacionada ao enxerto na função handler acima

function downloadKml(name, kmlString) {
  var blob = new Blob([kmlString], { type: 'application/vnd.google-earth.kml+xml' });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = name + '.kml';
  a.click();
  window.URL.revokeObjectURL(url);
}

//Carregar Geometrias Essenciais
carregarLimite();
carregaLoteamento();

// Conectar o botão à função
document.getElementById('btnCarregaEdificacao').addEventListener('click', () => {
  carregaEdificio();
});

//Menu de Marcos Astronomicos
document.getElementById('sliderMarcoAstronomico').addEventListener('change', (event) => {
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
});

//Atribui Extrusão de acrodo com o valor da caixa de texto
document.getElementById('boxAlturaEdif').addEventListener('change', (event) => {
  AlturaEdificacao();
});
document.getElementById('boxCotaSoleira').addEventListener('change', (event) => {
  AlturaSoleira();
  CotaSoleiraAtual = parseFloat(document.getElementById('boxCotaSoleira').value);
});

document.getElementById('btn3D').addEventListener('click', () => {
  Vista3d();
  toggleMap();
});

document.getElementById('btnVistaSuperior').addEventListener('click', () => {
  VistaSuperior();
  toggleMap();
});

document.getElementById('btnMedir').addEventListener('click', () => {
  Medir();
});

document.getElementById('btnMedirApagar').addEventListener('click', () => {
  ApagarMedicao();
});

document.getElementById('btnDesligarMedir').addEventListener('click', () => {
  DesligarMedir();
});

document.getElementById('btnCarregarModelo3D').addEventListener('click', () => {
  carregarModelo3D();
});

document.getElementById('btnTeste').addEventListener('click', () => {
  //carregaRotulo();
  baixarPoligono(viewer, 'exportacao_cesium.kml');
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

export { pickedObject, CotaSoleiraAtual };
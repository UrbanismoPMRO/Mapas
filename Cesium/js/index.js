import { TokenCesium } from './config.js';
import { LocalAlvo, carregarLimite, carregaEdificio, carregaLoteamento, viewer, exibirAlerta } from './funcoes.js';
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


// Initialize the Cesium Viewer in the HTML element with the ID `cesiumContainer`    // Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo(LocalAlvo);

//viewer.extend(Cesium.viewerCesiumInspectorMixin);

//###############Pegar clique do mouse sobre o poligono###########
// 3. Criar o manipulador de eventos de clique
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
let pickedObject;
let mousePosition;
let varLongitude = -41.932416;
let varLatitude = -22.479147;
let varAltura = 300;
let varCartesiano;
let varCartografico;

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
      varLongitude = Cesium.Math.toDegrees(varCartografico.longitude);
      varLatitude = Cesium.Math.toDegrees(varCartografico.latitude);
      varAltura = viewer.scene.globe.getHeight(varCartografico); // Opcional: altura do terreno
      console.log(`Longitude: ${varLongitude}, Latitude: ${varLatitude}, Altura: ${varAltura}`);
    }
  }
  ////fim enxerto
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

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
  const opcaoSelecionada = event.target.value;
  if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
    const entity = pickedObject.id;

    // --- AQUI ALTERAMOS A PROPRIEDADE APENAS DESTE POLÍGONO ---
    const ConstAltura = parseFloat(document.getElementById("boxAlturaEdif").value); //pega o valor da altura no formulário
    //const entities = dataSource.entities.values;
    //for (let i = 0; i < entities.length; i++) {
    //    const entity = entities[i];
    entity.polygon.extrudedHeight = ConstAltura;
    //}
  }
});

document.getElementById('btn3D').addEventListener('click', () => {
viewer.projectionPicker.viewModel.switchToPerspective();
});

document.getElementById('btn2D').addEventListener('click', () => {
  viewer.projectionPicker.viewModel.switchToOrthographic();
});

document.getElementById('btnVistaSuperior').addEventListener('click', () => {
  VistaSuperior();
});

document.getElementById('btnMedir').addEventListener('click', () => {
Medir();
});

document.getElementById('btnMedirApagar').addEventListener('click', () => {
ApagarMedicao();
});

document.getElementById('btnDesligarMedir').addEventListener('click', () => {
DesligarMedir();
  /*  if (evento == false) {
    selTeste();
    evento = true;
    console.log(evento);
    //break;
  } else {
  if (evento == true) {
    selTeste();
    evento = false;
    console.log(evento);
  }
}*/
});

document.getElementById('btnTeste').addEventListener('click', () => {
  if (evento == false) {
    selTeste();
    evento = true;
    console.log(evento);
    //break;
  } else {
  if (evento == true) {
    selTeste();
    evento = false;
    console.log(evento);
  }
}
});


function VistaSuperior() {
  const NovoAlvo = {
    destination: Cesium.Cartesian3.fromDegrees(varLongitude, varLatitude, 300),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-90.0),
    }
  }
  viewer.camera.flyTo(NovoAlvo);
  viewer.projectionPicker.viewModel.switchToOrthographic();
};


//carregar arquivo
document.getElementById('btnCarregaArquivo').addEventListener('click', () => {
  document.getElementById('inputArquivo').click();
});

document.getElementById('inputArquivo').addEventListener('change', (event) => {
  const arquivo = event.target.files[0];
  
  if (arquivo) {
    const leitor = new FileReader();
    leitor.onload = function(e) {
      const conteudo = e.target.result;
      
      // Converter string para objeto JSON
      const dados = JSON.parse(conteudo);
      
      // Carregar no Cesium
      Cesium.GeoJsonDataSource.load(dados, {
        stroke: Cesium.Color.YELLOW,
        fill: Cesium.Color.YELLOW.withAlpha(0.5),
        strokeWidth: 2,
        clampToGround: true
      }).then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        viewer.zoomTo(dataSource);
        console.log('Arquivo carregado com sucesso!');
      }).catch(function(erro) {
        alert('Erro ao carregar arquivo: ' + erro);
      });
    };
    leitor.readAsText(arquivo);
  }
});



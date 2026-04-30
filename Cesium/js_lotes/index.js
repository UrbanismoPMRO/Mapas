import { TokenCesium, varPontoSelecionado } from './config.js';
import { LocalAlvo, carregarLimite, carregaLoteamento, viewer,  baixarPoligono, pegaObjetoClicado, carregaloteskml} from './funcoes.js';
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

//manipulador de eventos do mouse para funções de clique, como pegar o objeto clicado e pegar a posição do clique para exibir as coordenadas geográficas do local clicado. O manipulador é criado aqui, mas a função de pegar o objeto clicado e a função de pegar a posição do clique estão na função pegaObjetoClicado(), que é chamada logo abaixo, para que o evento de clique seja capturado e as funções sejam executadas.
export let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

//Carregar Geometrias Essenciais
carregarLimite();
carregaLoteamento();
pegaObjetoClicado();
//carregaloteskml();

//viewer.extend(Cesium.viewerCesiumInspectorMixin);

//Carregar Geometrias Essenciais
carregarLimite();
carregaLoteamento();

/*
//vISUALIZAÇÃO 3D


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

*/



/*BOTÕES ELIMINADOS

document.getElementById('btnCarregarModelo3D').addEventListener('click', () => {
  carregarModelo3D();
});

// Conectar o botão à função
document.getElementById('btnCarregaEdificacao').addEventListener('click', () => {
  carregaEdificio();
});

document.getElementById('btnTeste').addEventListener('click', () => {
  //carregaRotulo();
  baixarPoligono(viewer, 'exportacao_cesium.kml');
});

*/

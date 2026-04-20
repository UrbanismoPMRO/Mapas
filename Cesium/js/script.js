const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(
    1,
  ),
});

//>configura o relogio para coincidir o horario normal sem a diferenca de 3 horas
viewer.animation.viewModel.timeFormatter = function(date, viewModel) {
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

//> Voa para o local desejado
viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(-41.934365, -22.554048, 1400),
  orientation : {
    heading : Cesium.Math.toRadians(0.0),
    pitch : Cesium.Math.toRadians(-20.0),
  }
});
viewer.extend(Cesium.viewerDragDropMixin);

//###############Pegar clique do mouse sobre o poligono###########
// 3. Criar o manipulador de eventos de clique
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
let pickedObject;
handler.setInputAction(function (click) {
    // 4. Selecionar o objeto clicado
    pickedObject = viewer.scene.pick(click.position);
    // 5. Verificar se foi um polígono
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


///////############Inserir elementos e geometrias básicos#################


//> Add Cesium OSM Buildings, a global 3D buildings layer.
/*
const buildingTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);   
*/

// Carregar o arquivo GeoJSON: Limite Sombreamento
const geoJsonDataSource = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/LimiteLinha4326Original.geojson', {
    clampToGround: true // Garante que o polígono fique no chão
});
  // Adicionar ao visualizador e estilizar
  geoJsonDataSource.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    // Estilizar o polígono
    const entities = dataSource.entities.values;
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        entity.polygon.material = Cesium.Color.GRAY.withAlpha(1.0); // Cor preenchimento
        entity.polygon.outline = true;
        entity.polygon.outlineColor = Cesium.Color.BLACK;
    }
});
// Carregar o arquivo GeoJSON: Loteamento
const geoJsonDataSource2 = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Lotes_Polilines.geojson', {
    clampToGround: true, // Garante que o polígono fique no chão
    stroke: Cesium.Color.GREEN
});
  // Adicionar ao visualizador e estilizar
  geoJsonDataSource2.then(function(dataSource) {
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


// inclui um ativo da minha conta cesium ion
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDc2MzgyZS1kOGE0LTRlN2MtYjIzZi0xN2RmZTFkMjE1OGMiLCJpZCI6NDExOTAyLCJpYXQiOjE3NzQ5NzM4MTJ9.omFBwBT9qScebZD3MZQ4WhlaeZSirGvMYDjTJXOuHQQ";
try {
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(4607528);
  viewer.scene.primitives.add(tileset);
  await viewer.zoomTo(tileset);

  // Apply the default style if it exists
  const extras = tileset.asset.extras;
  if (
    Cesium.defined(extras) &&
    Cesium.defined(extras.ion) &&
    Cesium.defined(extras.ion.defaultStyle)
  ) {
    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
  }
} catch (error) {
  console.log(error);
}


/*
//Esse codigo abaixo é o original que foi substituido pela parte acima que foi colocada para inserir o asset da minha conta cesium com o bloco IFC da patricia
//> Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  //conj 01: habilita sombras: ok//shadows: true, // Habilita sombras globalmente
  //conj 01: habilita sombras: ok//terrainShadows: Cesium.ShadowMode.RECEIVE_ONLY // Opcional: terreno recebe sombra
});    
*/


//Muda as carcteristicas de um objeto ao clocar nele. Está funcionando é só tirar o comentário
/*
viewer.selectedEntityChanged.addEventListener(function(selectedEntity) {
    // Restaurar a cor original de todos? (Opcional - precisa lógica extra)
    
    if (Cesium.defined(selectedEntity)) {
        // Mudar estilo do objeto selecionado
        selectedEntity.polygon.material = Cesium.Color.YELLOW;
        selectedEntity.polygon.extrudedHeight = 56
    }
});
*/

///////###########Carrega o polígono na variável VarEdificio########
let VarEdificio = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Edificio_BlocoDuplo.geojson', {
    clampToGround: true // Garante que o polígono fique no chão
});

///////##############Botoes e Menus###############
const options2 = [
  {
    text: "Solstício de Verão - 07h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-12-22T10:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-12-21T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-12-22T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);
    },
  },
  {
    text: "Solstício de Verão - 17h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-12-22T20:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-12-21T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-12-22T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);    },
  },
  {
    text: "Equinócio de Outono - 08h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-03-21T11:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-03-21T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-03-22T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);    },
  },
  {
    text: "Equinócio de Outono - 16h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-03-21T19:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-03-21T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-03-22T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);    },
  },
  {
    text: "Solstício de Inverno - 09h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-06-21T10:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-06-21T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-06-22T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);
    },
  },
  {
    text: "Solstício de Inverno - 15h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-06-21T18:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-06-21T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-06-22T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);    },
  },  
  {
    text: "Equinócio de Primavera - 08h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-09-23T11:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-09-22T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-09-23T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);    },
  },
  {
    text: "Equinócio de Primavera - 16h",
    onselect: function () {
    // your code here, the first option is always run at load
      var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-09-23T19:00:00Z');
      viewer.clock.currentTime = dataEspecifica;
      // Define o horário de início e fim
      var dataInicial = Cesium.JulianDate.fromIso8601("2026-09-22T00:00:00Z");
      var dataFinal = Cesium.JulianDate.fromIso8601("2026-09-23T00:00:00Z");
      // Sincroniza a Timeline visual com as novas configurações do Clock
      viewer.timeline.zoomTo(dataInicial, dataFinal);    },
  },
];
Sandcastle.addToolbarMenu(options2);

//Este código funcionou para inserir GeoJason Extrudado e com sombra
Sandcastle.addToolbarButton("Inserir Arquivo", function () {
// Carregar o arquivo GeoJSON
const geoJsonDataSource = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Pol.geojson', {
    clampToGround: true // Garante que o polígono fique no chão
});
// Adicionar ao visualizador e estilizar
geoJsonDataSource.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    // Zoom para o polígono
    viewer.zoomTo(dataSource);
    // Estilizar o polígono
    const entities = dataSource.entities.values;
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        entity.polygon.material = Cesium.Color.GRAY.withAlpha(1.0); // Cor preenchimento
        entity.polygon.outline = true;
        entity.polygon.outlineColor = Cesium.Color.BLACK;
        entity.polygon.extrudedHeight = 26
        entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
    }
});
});

//Este código funcionou para inserir um bloco por  meio de codigo
Sandcastle.addToolbarButton("Criar Entidade", function () {
  const blueBox = viewer.entities.add({
  name: "Blue box",
  position: Cesium.Cartesian3.fromDegrees(-41.918617, -22.514955, 0.0),
  box: {
    dimensions: new Cesium.Cartesian3(40.0, 30.0, 26.0),
    material: Cesium.Color.BLUE,
    shadows: Cesium.ShadowMode.ENABLED,
    clampToGround: true
  },
});
});


//+ou-Este código funcionou +ou- para inserir Linha com KML: não gruda no solo
Sandcastle.addToolbarButton("Inserir Limite KML", function () {
const options = {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas,
    clampToGround : true
};

// Substitua 'caminho/para/seu_arquivo.kml' pela URL real
viewer.dataSources.add(Cesium.KmlDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Limite_Edificio_Linhas.kml', options))
    .then(function(dataSource) {
        // Opcional: A câmera dá zoom automaticamente no polígono carregado
        viewer.zoomTo(dataSource);
    })
   
});


//Este código funcionou para inserir GeoJason com linha aderida ao solo
Sandcastle.addToolbarButton("Inserir Limite GJ", function () {
// Carregar o arquivo GeoJSON
const geoJsonDataSource = Cesium.GeoJsonDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/LimiteLinha4326Original.geojson', {
    clampToGround: true // Garante que o polígono fique no chão
});

// Adicionar ao visualizador e estilizar
geoJsonDataSource.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    
    // Zoom para o polígono
    viewer.zoomTo(dataSource);

    // Estilizar o polígono
    const entities = dataSource.entities.values;
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        entity.polygon.material = Cesium.Color.GRAY.withAlpha(1.0); // Cor preenchimento
        entity.polygon.outline = true;
        entity.polygon.outlineColor = Cesium.Color.BLACK;
    
    }
});
});

Sandcastle.addToolbarButton("Inserir Poligono KML", function () {
Cesium.KmlDataSource.load('https://urbanismopmro.github.io/Mapas/Cesium/Poligono.kml', {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas
    
}).then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    viewer.zoomTo(dataSource);
    
    // Pegar todas as entidades do KML
    const entities = dataSource.entities.values;
    
    for (let i = 0; i < entities.length; i++) {
        let entity = entities[i];
        
        // Estilizar o polígono
        if (entity.polygon) {
            entity.polygon.material = Cesium.Color.RED; // Cor de preenchimento
            entity.polygon.outline = true;
            entity.polygon.fill = true;
            entity.polygon.outlineColor = Cesium.Color.BLACK;
            entity.polygon.extrudedHeight = 26
            entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
        }
    }
});   
});


//Voa para determinado ponto desejado
Sandcastle.addToolbarButton("Voar para determinado ponto", function () {
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 100),
    orientation: {
        heading: Cesium.Math.toRadians(0), // Direção (norte)
        pitch: Cesium.Math.toRadians(-90), // Ângulo para baixo
        roll: 0
    }
});});


Sandcastle.addToolbarButton("modelo gltf", function () {
  const position = Cesium.Cartesian3.fromDegrees(
    -41.915818, // Longitude
    -22.514109, // Latitude
    1.5        // Altitude em metros
);
const entity = viewer.entities.add({
    position: position,
    model: {
        uri: 'https://urbanismopmro.github.io/Mapas/Cesium/Prisma1.glb',
        scale: 1.0, // Ajuste a escala se necessário
        minimumPixelSize: 64 // Tamanho mínimo na tela
    }
});
viewer.zoomTo(entity);
});

Sandcastle.addToolbarButton("modelo gltf (morro)", function () {
  const position = Cesium.Cartesian3.fromDegrees(
    -41.928067, // Longitude
    -22.520245, // Latitude
    //51        // Altitude em metros
);
const entity = viewer.entities.add({
    position: position,
    model: {
        uri: 'https://urbanismopmro.github.io/Mapas/Cesium/Prisma1.glb',
        scale: 1.0, // Ajuste a escala se necessário
        minimumPixelSize: 64 // Tamanho mínimo na tela
    }
});
viewer.zoomTo(entity);
});



//Adiciona o polígono carregado em VarEdificio
Sandcastle.addToolbarButton("Inserir Edificio GJ", function () {
// Adicionar ao visualizador e estilizar
VarEdificio.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    // Zoom para o polígono
    viewer.zoomTo(dataSource);
    // Estilizar o polígono
    const entities = dataSource.entities.values;
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        entity.polygon.material = Cesium.Color.GRAY.withAlpha(1.0); // Cor preenchimento
        entity.polygon.outline = true;
        entity.polygon.outlineColor = Cesium.Color.BLACK;
        //entity.polygon.extrudedHeightReference = Cesium.HeightReference.RELATIVE_TO_GROUND; //considera o solo como nivel para a extrusão (altural)
        entity.polygon.extrudedHeight = 200;
        entity.polygon.shadows = Cesium.ShadowMode.ENABLED;
    }
});
});

//Atribuir extrusão ao polígono carregado em VarEdificio
Sandcastle.addToolbarButton("Extrusão Poligono VarEdificio", function () {
VarEdificio.then(function(dataSource) {
    const ConstAltura = parseFloat(document.getElementById("alt").value); //pega o valor da altura no formulário
    const entities = dataSource.entities.values;
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        entity.polygon.extrudedHeight = ConstAltura;
    }
});
});

//altera propriedades do polígono selecionado, de acordo com o conteúdo do campo do formulário
Sandcastle.addToolbarButton("Extruda poligono selecionado", function () {
    if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
      const entity = pickedObject.id;
        
      // --- AQUI ALTERAMOS A PROPRIEDADE APENAS DESTE POLÍGONO ---
      const ConstAltura = parseFloat(document.getElementById("alt").value); //pega o valor da altura no formulário
      //const entities = dataSource.entities.values;
      //for (let i = 0; i < entities.length; i++) {
      //    const entity = entities[i];
          entity.polygon.extrudedHeight = ConstAltura;
      //}
    }
});

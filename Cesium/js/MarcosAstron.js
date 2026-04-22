import { viewer } from "./funcoes.js";

function selMarcoAstronomico(opcao) {
    switch (opcao) {
        case '1':
            var dataAtual = Cesium.JulianDate.fromDate(new Date());
            var dataAtual_String = Cesium.JulianDate.toIso8601(dataAtual);
            viewer.clock.currentTime = dataAtual;
            // Define o horário de início e fim
            var dataInicial_String = dataAtual_String.slice(0, 10) + "T00:00:00Z";
            var dataInicial = Cesium.JulianDate.fromIso8601(dataInicial_String);
            var dataFinal = Cesium.JulianDate.addSeconds(dataInicial, 86400, new Cesium.JulianDate());
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '2':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-03-21T11:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-03-21T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-03-22T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '3':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-03-21T19:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-03-21T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-03-22T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '4':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-06-21T12:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-06-21T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-06-22T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '5':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-06-21T18:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-06-21T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-06-22T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '6':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-09-23T11:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-09-22T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-09-23T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '7':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-09-23T19:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-09-22T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-09-23T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '8':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-12-22T10:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-12-22T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-12-23T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
        case '9':
            var dataEspecifica = Cesium.JulianDate.fromIso8601('2026-12-22T20:00:00Z');
            viewer.clock.currentTime = dataEspecifica;
            // Define o horário de início e fim
            var dataInicial = Cesium.JulianDate.fromIso8601("2026-12-22T00:00:00Z");
            var dataFinal = Cesium.JulianDate.fromIso8601("2026-12-23T00:00:00Z");
            // Sincroniza a Timeline visual com as novas configurações do Clock
            viewer.timeline.zoomTo(dataInicial, dataFinal);
            break;
    }
}

function selTeste(opcao) {
    switch (opcao) {
        case 'Um':
            alert("Um");
            break;
        case 'Dois':
            alert("Dois");
            break;
        case 'Tres':
            alert("Três");
            break;
    }
}

export { selMarcoAstronomico, selTeste };
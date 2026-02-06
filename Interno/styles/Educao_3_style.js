var size = 0;
var placement = 'point';

var style_Educao_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_Educao_3(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Educao_3rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32.000004],
                  scale: 0.15625,
                  anchor: [16.0, 16.000002],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/EQU_Educ_Superior.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Educao_3rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32.000004],
                  scale: 0.15625,
                  anchor: [16.0, 16.000002],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/EQU_Educ_Estadual.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Educao_3rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32.000004],
                  scale: 0.15625,
                  anchor: [16.0, 16.000002],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/EQU_Educ_Municipal.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Educao_3(feature, value);
        ;

    return style;
};

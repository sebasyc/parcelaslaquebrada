var size = 0;
var placement = 'point';
function categories_Outputpointlayer_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'disponible':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,201,74,0.4392156862745098)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}), fill: new ol.style.Fill({color: 'rgba(61,201,74,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.200000000000001 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'vendida':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.200000000000002 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,99,71,0.30196078431372547)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}), fill: new ol.style.Fill({color: 'rgba(255,99,71,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Outputpointlayer_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("estado");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
var style = categories_Outputpointlayer_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

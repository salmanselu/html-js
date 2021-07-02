
function toggleNightmode(){
var body = document.getElementByTagName("body");
var bgcolor = body.bgcolor;
var color = body.color;
body.bgcolor = (bgcolor=="black")?"white":"black";
body.color = (color=="black")?"white":"black";
}

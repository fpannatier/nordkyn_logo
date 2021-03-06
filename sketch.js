var weather;
var farbton = 171;
var d = 0;
var deg = 0;
var speed = 0;

function setup() {
  createCanvas(400, 400);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Oslo&APPID=001b0f58045147663b1ea518d34d88b4&units=metric', gotData);

  colorMode(HSB);

}

function gotData(data) {
  weather = data;

}

function draw() {

  if (weather) {
    farbton = map(weather.main.temp, -20, 30, 0, 360);
    speed = weather.wind.speed;
    deg = weather.wind.deg;
    console.log(weather.main.temp,speed,deg);
  }

  //bedingung für die windgeschwindigkeit
  if(speed<1.5){
    d = 0;
  }
  //bedingung für windrichtung
  else if (deg > 337.5 && deg < 360 || deg > 0 && deg < 22.5) {
    d = 1;
  } else if (deg > 22.5 && deg < 67.5) {
    d = 2;
  } else if (deg > 67.5 && deg < 112.5) {
    d = 3;
  } else if (deg > 112.5 && deg < 157.5) {
    d = 4;
  } else if (deg > 157.5 && deg < 202.5) {
    d = 5;
  } else if (deg > 202.5 && deg < 247.5) {
    d = 6;
  } else if (deg > 247.5 && deg < 292.5) {
    d = 7;
  } else if (deg > 292.5 && deg < 337.5) {
    d = 8;
  }

  //farbton = map(mouseX, 0, width, 0, 360);

  //die farben müsste man eigentlich auch irgendwo in einem array definieren.
  //stell dir vor du hättest 10000 dreiecke mit 10000 verschiedenen farben.
  //jede farbe einzeln zu definieren wäre dann nicht mehr praktikabel.
  t1 = color(farbton, 10, 78, 1);
  t2 = color(farbton, 60, 78, 1);
  t3 = color(farbton, 61, 40, 1);
  t4 = color(farbton, 50, 55, 1);
  t5 = color(farbton, 35, 78, 1);
  t6 = color(137, 3, 87, 1);

  //ein array aus den erstellten farben. damit man unten im for loop auf die einzelnen farben zugreifen kann.
  var colors = [t1, t2, t3, t4, t5, t6];

  background(farbton, 10, 100, 1);
  noStroke();


  var triangles = [
    [e1[d], e2[d], abc0],
    [e2[d], e3[d], abc0],
    [e3[d], e4[d], abc0],
    [e4[d], e5[d], abc0],
    [e5[d], e6[d], abc0],
    [e6[d], e1[d], abc0]
  ];



  //mit einer for schlaufe über as in points.js definierte triangles array loopen.
  for (var i = 0; i < triangles.length; i++) {
    var t = triangles[i];
    var c = colors[i];
    fill(c);
    beginShape();
    //jedes dreieck in triangles ist wiederum ein array mit drei einträgen (ein eintrag pro punkt)
    //auch hier könnte man einen for loop machen.
    vertex(t[0].x, t[0].y);
    vertex(t[1].x, t[1].y);
    vertex(t[2].x, t[2].y);
    endShape();
  }

}

//keyTyped events zur präsentation
/*
function keyTyped() {
  if (key === '0') {
    d = 0;
  } else if (key === '1') {
    d = 1;
  } else if (key === '2') {
    d = 2;
  } else if (key === '3') {
    d = 3;
  } else if (key === '4') {
    d = 4;
  } else if (key === '5') {
    d = 5;
  } else if (key === '6') {
    d = 6;
  } else if (key === '7') {
    d = 7;
  } else if (key === '8') {
    d = 8;
  }
  // uncomment to prevent any default behavior
  return false;
}
*/

var weather;
var farbton = 171;

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
    farbton = weather.main.temp;
    console.log(weather.main.temp);
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
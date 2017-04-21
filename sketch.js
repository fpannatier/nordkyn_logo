var weather;

function setup() {
  createCanvas(400, 400);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Oslo&APPID=001b0f58045147663b1ea518d34d88b4&units=metric', gotData);

  var farbton = 171;

  colorMode(HSB);
  t1 = color(farbton, 10, 78, 1);
  t2 = color(farbton, 60, 78, 1);
  t3 = color(farbton, 61, 40, 1);
  t4 = color(farbton, 50, 55, 1);
  t5 = color(farbton, 35, 78, 1);
  t6 = color(137, 3, 87, 1);

}

function gotData(data) {
  weather=data;

}

function draw() {

  //farbton = map(mouseX, 0, width, 0, 360);
  if(weather) {
    var farbton = weather.main.temp;
  }
  t1 = color(farbton, 10, 78, 1);
  t2 = color(farbton, 60, 78, 1);
  t3 = color(farbton, 61, 40, 1);
  t4 = color(farbton, 50, 55, 1);
  t5 = color(farbton, 35, 78, 1);
  t6 = color(137, 3, 87, 1);

  background(farbton,10,100,1);
  noStroke();

  //T1
  fill(t1);
  triangle(a1.x, a1.y, a2.x, a2.y, abc0.x, abc0.y);

  //T2
  fill(t2);
  triangle(a2.x, a2.y, a3.x, a3.y, abc0.x, abc0.y);

  //T3
  fill(t3);
  triangle(a3.x, a3.y, a4.x, a4.y, abc0.x, abc0.y);

  //T4
  fill(t4);
  triangle(a4.x, a4.y, a5.x, a5.y, abc0.x, abc0.y);

  //T5
  fill(t5);
  triangle(a5.x, a5.y, a6.x, a6.y, abc0.x, abc0.y);

  //T6
  fill(t6);
  triangle(a6.x, a6.y, a1.x, a1.y, abc0.x, abc0.y);
}

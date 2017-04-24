//Eckpunkte Sechseck ABC
var abc0 = {
  x: 200,
  y: 200
};

var a1 = {
  x: 200,
  y: 84.53
};

var a2 = {
  x: 300,
  y: 142.265
};

var a3 = {
  x: 300,
  y: 257.735
};

var a4 = {
  x: 200,
  y: 315.47
};

var a5 = {
  x: 100,
  y: 257.735
};

var a6 = {
  x: 100,
  y: 142.265
};

var b1 = {
  x: 200,
  y: 112.243
};

var b2 = {
  x: 276,
  y: 156.121
};

var b3 = {
  x: 276,
  y: 243.879
};

var b4 = {
  x: 200,
  y: 287.757
};

var b5 = {
  x: 124,
  y: 243.879
};

var b6 = {
  x: 124,
  y: 156.121
};

var c1 = {
  x: 200,
  y: 142.265
};

var c2 = {
  x: 250,
  y: 171.132
};

var c3 = {
  x: 250,
  y: 228.868
};

var c4 = {
  x: 200,
  y: 257.735
};

var c5 = {
  x: 150,
  y: 228.868
};

var c6 = {
  x: 150,
  y: 171.132
};

var e1 = [a1,a1,b1,c1,c1,c1,b1,a1,b1];
var e2 = [b2,a2,b2,c2,c2,c2,c2,c2,b2];
var e3 = [c3,c3,b3,a3,b3,c3,c3,c3,b3];
var e4 = [c4,c4,b4,a4,a4,a4,b4,c4,b4];
var e5 = [c5,c5,c5,c5,b5,a5,b5,c5,b5];
var e6 = [b6,c6,c6,c6,c6,c6,b6,a6,b6];

var triangles = [
    [e1,e2,abc0],
    [e2,e3,abc0],
    [e3,e4,abc0],
    [e4,e5,abc0],
    [e5,e6,abc0],
    [e6,e1,abc0]
  ];

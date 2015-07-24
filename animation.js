
var context;
var x=270;
var y=100;
var dx=5;
var dy=9;
var ctx = c.getContext("2d");

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,12);
}

function draw()
{
  context.clearRect(0,0, 1800,1800);
  context.beginPath();
  context.fillStyle="#66FF66";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,22,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  // Boundary Logic
if( x<270 || x>1070) dx=-dx; 
if( y<100 || y>230) dy=-dy; 
x+=dx/2; 
y+=dy/2;
}

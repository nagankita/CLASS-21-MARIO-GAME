

var countDistanceX=0
var gap=30
function preload()
{}

function setup() {
  createCanvas(9000, 668);

  for (i=0;i<12;i++){
  platform1=new Platform(countDistanceX);
  gap=random([20,5,0,50,80,90])
  countDistanceX=countDistanceX+platform1.rw+gap

}
  
}

function draw() {
  background('skyblue'); 
 drawSprites();
}


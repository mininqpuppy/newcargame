var Car1, car1Image;
var Car2, car2Image;
var Car3, car3Image;
var Car4, car4Image;
var Track, trackImage;

function preload(){
  car1Image=loadImage("car1.png")
  car2Image=loadImage("car2.png")
  car3Image=loadImage("car3.png")
  car4Image=loadImage("car4.png")
  trackImage=loadImage("track.jpg")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background("black");  
  image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
  drawSprites();
}
var bg,bg2,form,system,code,security;
var x,y,z;
var score=0;

const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";


function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
  code=new Code();
  

}

function draw() {
  background(bg);
  console.log(score);
  code.clues();
  security.display();
  security.codes();
  

  // Add code to display score in the middle of the screen
   
  // Add code to display the end screen
  if(score == 3){
    background(bg2);
    security.hide();
    textSize(45);
    fill("black");
    text("Game Over! You Won!",200,250);
  }

  drawSprites();

  textSize(25);
  fill("yellow");
  text("Score: " +score,850,50);

}
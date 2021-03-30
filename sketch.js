var canvas;
var music
var blue,green,yellow
var pink, box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    pink = createSprite(100,590,200,40);
    pink.shapeColor = "hotpink";
    blue = createSprite(300,590,200,40);
    blue.shapeColor = "lightblue";
    green = createSprite(500,590,200,40)
    green.shapeColor = "lightgreen";
    yellow = createSprite(700,590,200,40);
    yellow.shapeColor = "yellow"

    //create box sprite and give velocity
    //box = createSprite(random(20,750));
    box =createSprite(random(20,750), 300,20,20);
    box.shapeColor = "white"
    box.velocityX=7;
    box.velocityY=7;
   

}

function draw() {
    background(0,0,0);
   
   //creating the edges for the box to bounce off
    
    
     if(box.x<0){
         box.velocityX=7;
     }
     else if(box.x>800){
         box.velocityX=-7;
     }
     else if(box.y<0){
         box.velocityY=7;
     }
   
    //adding the condition where the box touching the specific colored surface turns 
    //into that color with condition of music stopping and playing

    if(pink.isTouching(box)&& box.bounceOff(pink)){
        box.shapeColor="hotpink";
        music.play();
    }
    if(yellow.isTouching(box) && box.bounceOff(yellow)){
        box.velocityX=0;
        box.velocityY=0;
        box.shapeColor="yellow";
        music.stop();
    }

    if(green.isTouching(box)&& box.bounceOff(green)){
        box.shapeColor="lightgreen";
      
    }

    if(blue.isTouching(box)&& box.bounceOff(blue)){
        box.shapeColor="lightblue";
       
    }




    drawSprites();
}

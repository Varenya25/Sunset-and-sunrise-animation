const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var BG ;

function preload() {
    // create getBackgroundImg( ) here
    //backgroundImg = loadImage("Images/bg.png");
    getBackgroundImg ();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
// add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);  
  else 
    background ("yellow");

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

// write code to fetch time from API
var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//change the data in JSON format
var responseJSON = await response.json ();
var datetime = responseJSON.datetime;
// write code slice the datetime
hour = datetime.slice(11,13);
// add conditions to change the background images from sunrise to sunset
if (hour >= 04 && hour <= 06){
    BG = "sunrise1.png";
  }else if(hour >= 06 && hour <= 08){
    BG = "sunrise2.png";
  }else if(hour >= 08 && hour <=10 ){
    BG = "sunrise3.png";
  }else if(hour >= 10 && hour <= 12){
    BG = "sunrise4.png";
  }else if(hour >= 12 && hour <= 14){
    BG = "sunrise5.png";
  }else if(hour >= 14 && hour <= 16){
    BG = "sunrise6.png";
  }else if(hour >= 16 && hour <= 18){
    BG = "sunset7.png";
  }else if(hour >= 18 && hour <= 20){
    BG = "sunset8.png";
  }else if(hour >= 20 && hour <= 22){
    BG = "sunset9.png";
  }else if(hour >= 22 && hour <= 23){
    BG = "sunset10.png";
  }else if(hour >= 23 && hour <= 0){
    BG = "sunset11.png";
  }else if(hour >= 0 && hour <= 03){
    BG = "sunset12.png";

    //load the image in backgroundImg variable here
        backgroundImg = loadImage(BG);
    }
}

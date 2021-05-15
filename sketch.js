const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
// var ba;
// var bc,bk, br,bo, bu,bn,bd, oun,bgr,nd;
var backGimg;
var bg ,hour;

function preload() {
    getBackgroundImg();

    // create getBackgroundImg( ) here
   // backGimg=loadImage(bg);
    
    // ba=loadImage("sunrise1.png");
    // bc=loadImage("sunrise2.png");
    // bk=loadImage("sunrise3.png");
    // bg=loadImage("sunrise4.png");
    // br=loadImage("sunrise5.png");
    // bo=loadImage("sunrise6.png");
    // bu=loadImage("set7.png");
    // bn=loadImage("set8.png");
    // bd=loadImage("set9.png");
    // oun=loadImage("set10.png");
    // bgr=loadImage("set11.png");
    // nd=loadImage("set12.png");

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backGimg)
background(backGimg);

    // add condition to check if any background image is there to add


    Engine.update(engine);
    
    textSize(30);
    fill(0);
    if(hour>=12){
        text("time: "+hour%12+"pm",50,100);
    }
    else if(hour==0){
        text("time:12am ",100,100);
    } 
    else{
        text("time: "+hour%12+"am",50,100);
    }

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");

//change the data in JSON format
    var rj = await response.json();
    console.log(rj);
    var datetime = rj.datetime;
   
// write code slice the datetime
     hour = datetime.slice(11,13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }else if(hour>=12 && hour<=14){
        bg = "sunrise5.png";
    }else if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
    }else if(hour>=16 && hour<=17){
        bg = "sunset7.png";
    }else if(hour>=17 && hour<=18){
        bg = "sunset8.png";
    }else if(hour>=18 && hour<=19){
        bg = "sunset9.png";
    }else if(hour>=19 && hour<=20){
        bg = "sunset10.png";
    }else if(hour>=20 && hour<=23){
        bg = "sunset11.png";
    }else if(hour>=00 && hour<=04){
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
backGimg=loadImage(bg);
}

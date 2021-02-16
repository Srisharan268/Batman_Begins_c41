const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,umbrella,frames;
var drops = [];
var maxDrops = 100;
var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(300,600);

    engine = Engine.create();
    world = engine.world;

    for(var i=0 ; i<maxDrops ; i++){
        drops.push(new Drop(random(0,300),random(0,600)));
    }

    umbrella = new  Umbrella(150,468);

    Engine.run(engine);


   
    
}

function draw(){
    background("black");
    if(frameCount % 90 == 0){
        var rand = Math.round(random(1,4));
        thunder = createSprite(150,20);
        thunder.scale = 0.5
        switch (rand){
            case 1: thunder.addImage(thunder1);
                    console.log(rand);
                    break;

            case 2: thunder.addImage(thunder2);
                    console.log(rand);
                    break;
            
            case 3: thunder.addImage(thunder3);
                    console.log(rand);
                    break;

            case 4: thunder.addImage(thunder4);
                    console.log(rand);
                    break;

            default:console.log("rr",rand);
                    break;
                
        }
        thunder.lifetime = 12;
    }
    drawSprites();
    for(var i=0;i<drops.length;i++){
        drops[i].draw();
        drops[i].update();
    }
    
}   


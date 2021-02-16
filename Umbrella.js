class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
            friction:1,
            restitution:0
        }

        this.body = Bodies.circle(x,y,30,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
        this.animation1 = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png",
        "images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png",
        "images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png",
        "images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");

         var image = createSprite(x-2.5,y+47.5);
        image.addAnimation("walking",this.animation1);
        image.scale = 0.25;

    }

    draw(){
        
        var pos = this.body.position;
        fill("blue");
        noStroke();
        ellipse(pos.x,pos.y,60,60);
    }

}
//145,75
//344,654
//172,327
//+27,+252
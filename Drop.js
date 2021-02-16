class Drop{
    constructor(x,y){
        var options = {
            isStatic : false,
            friction:1,
            restitution:0
        }

        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y > 600){
            Body.setPosition(this.body,{x: random(0,300), y: -10});
        }
    }

    draw(){
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
}
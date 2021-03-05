class Stone{
    constructor(x,y){
        var options={
            restitution:0,
            isStatic:false,
            friction:1,
            dencity:1.2
        }
        this.body=Matter.Bodies.circle(x,y,25,options);
        this.radius=25;
        
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(104);
        stroke("grey");
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
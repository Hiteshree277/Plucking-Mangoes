class Boy  {
    constructor(x,y,weidth,height){
        this.image = loadImage("boy.png")
        var options={
            isStatic:false
        }
    
        this.body=Bodies.rectangle(x,y,weidth,height,options)
        this.weidth=weidth;
        this.height=height;
        World.add(world,this.body);
    
    
        
    }
    display(){
    
     var pos=this.body.position;
    
     rectMode(CENTER);
     fill("brown");
     rect(pos.x,pos.y,this.weidth,this.height);
    
    }
    
    }
        
    
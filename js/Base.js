class Base {
    constructor(x,y,w,h){
    this.x = x;
    this.y=y;
    this.w= w;
    this.h=h;

    var options= {
        isStatic:true
    }
    this.body = Matter.Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    
    }

    show(){
        push();
        var position= this.body.position;
        fill("yellow");
        rectMode(CENTER);
        rect(position.x,position.y,this.w, this.h);
        
        pop();



    }
}
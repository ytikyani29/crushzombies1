class Stone {
        constructor(x,y,r){
            this.x = x;
            this.y=y;
            this.r = r;
        
            var options= {
                isStatic:false,
                restitution:0.01,
                frictionAir:0.2
            }
            this.body = Matter.Bodies.circle(x,y,r,options);
            World.add(world,this.body);
            
            }
        
            show(){
                push();
                var position= this.body.position;
                fill("white");
                ellipseMode(CENTER);
                ellipse(position.x,position.y,this.r);
                
                pop();
        
        
        
            }
    }

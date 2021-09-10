class Link {
    constructor(bodyA,bodyB){
    var lastlink = bodyA.body.bodies.length-2;
    console.log(lastlink);
    this.constraint = Matter.Constraint.create({
        bodyA:bodyA.body.bodies[lastlink],
        pointA:{x:0,y:0},
        bodyB:bodyB.body,
        pointB:{x:0,y:0},
        length:0,
        stiffness:0.1
    })
    console.log(this.constraint);
    World.add(world,this.constraint)
    }
}
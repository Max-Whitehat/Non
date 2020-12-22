class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 100,
            stiffness : 1
        }
        this.Slingshot = Matter.Constraint.create(options)
        World.add(world,this.Slingshot)
        this.pointB=pointB

    }
    display(){
        strokeWeight(5)
    

        if (this.Slingshot.bodyA){
        line(this.Slingshot.bodyA.position.x,
            this.Slingshot.bodyA.position.y,
            this.pointB.x,
            this.pointB.y)
        }
   
    }

    fly(){
        this.Slingshot.bodyA = null
    }

}


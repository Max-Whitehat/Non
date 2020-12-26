class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 50,
            stiffness : 1
        }
        this.Slingshot = Matter.Constraint.create(options)
        World.add(world,this.Slingshot)
        this.pointB=pointB
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

    }
    display(){
        strokeWeight(5)

     
    

       // imageMode(CENTER);

        push();
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
      
        pop();
       
        stroke(49,20,8)
        strokeWeight(10)

        if (this.Slingshot.bodyA){

            var pointA=this.Slingshot.bodyA.position
            var pointB = this.Slingshot.pointB    

          

                if (pointA.x<200){
                image(this.sling3, pointA.x-30, pointA.y-20,20,40);

                line(pointA.x-20, pointA.y,
                    pointB.x-10, pointB.y)

                line(pointA.x-20, pointA.y,
                    pointB.x+30, pointB.y)

                } else{
                    image(this.sling3, pointA.x+25, pointA.y-20,20,40);
                    line(pointA.x+20, pointA.y,
                        pointB.x-10, pointB.y)
                    
                        
                  line(pointA.x+20, pointA.y,
                        pointB.x+30, pointB.y)
                }
                
            
        }
   
    }

    fly(){
        this.Slingshot.bodyA = null
    }

    attach(body){
        this.Slingshot.bodyA = body
    }

}


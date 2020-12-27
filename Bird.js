class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");

    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if (this.body.velocity.x>10&&this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }
    for(var i = 0 ; i < this.trajectory.length ; i ++){
      image(this.smokeImg,this.trajectory [i] [0], this.trajectory [i] [1] )
    }
  }
}


/*


this.trajectory = [[100,50],[110,55],[120,60]];

smoke1x= this.trajectory[0][0];
smoke1y = this.trajectory[0][1];

smoke2x=this.trajectory[1][0]
smoke2y=this.trajectory[1][1]

smoke3x=this.trajectory[2][0]
smoke3y=this.trajectory[2][1]









*/

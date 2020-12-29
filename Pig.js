class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility=255
    this.image = loadImage("sprites/enemy.png");
  }
  display(){

   
    if(this.body.speed<3){
        super.display();
    }else{
      push();
    if(this.visibility>-50){
  score=score+1
}
      World.remove(world,this.body)
      tint(255, this.visibility); 
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      this.visibility=this.visibility-5
      pop();
    }
  }
};










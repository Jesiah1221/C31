class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.projectry = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    
    var positions = [this.body.position.x,this.body.position.y]
    this.projectry.push(positions)
    for (var i = 0; i < this.projectry.length; i++){
      image(this.smoke,this.projectry[i][0],this.projectry[i][1])
    }
  }
} 
}
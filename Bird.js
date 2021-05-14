class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trajectory=[]
    this.image1=loadImage("sprites/smoke.png")
   
    this.image=loadImage("sprites/bird.png");
  }
  

  display() {
  
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>250&&this.body.velocity.x>10){
    var dance=[this.body.position.x,this.body.position.y]
    this.trajectory.push(dance)
    }
    for(var music=0;music<this.trajectory.length;music++){

    image(this.image1,this.trajectory[music][0], this.trajectory[music][1])
    }
    
  }
}

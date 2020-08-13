class ball{

  constructor(x,y,r){
    var options={
     resitution:0.3,
     isStatic:false,
     friction:0.5,
     density:1.2
    }
    this.r=r
    this.body = Bodies.circle(x,y,this.r,options);
  World.add(world,this.body)
  this.image=loadImage("paper.png");
  }

  


   display(){
   var position = this.body.position
   push()
   translate(position.x,position.y);
   imageMode(CENTER)
   image(this.image, 0, 0, this.width, this.height);
   strokeWeight(5);
  pop()
   }

}



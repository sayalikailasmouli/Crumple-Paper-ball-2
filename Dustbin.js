class Dustbin{
  constructor(x,y,width,height){
   var options={
    isStatic:true,
    friction:0.1,
    density:2,
}


this.dustbin=loadImage("dustbingreen.png")
this.body = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
  }
    display(){

   var position=this.body.position
   push()
   translate(position.x,position.y);
   imageMode(CENTER)
   image(this.dustbin, 0, 0, this.width, this.height);
  pop()
   
}



}
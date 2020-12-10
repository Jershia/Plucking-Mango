class Stone{
    constructor(x,y,r){
      var options = {
      isStatic : false
      }
      this.x=x;
      this.y=y;
      this.r=r
     this.body = Bodies.circle(this.x,this.y,this.r,options)
     this.image = loadImage("stone.png")
     World.add(world,this.body);
     }
     display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER)
      image(this.image,0,0,this.radius)
      pop();
     }
 }
class Tree{
    constructor(x,y,width,height){
      var options = {
      isStatic : true
      }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.height = height;
   this.width = width;
   this.tree = loadImage("tree.png")
   World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
     // imageMode(CENTER);
      image(this.tree,750,50,400,450)
  }
  }
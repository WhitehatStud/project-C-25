class Dustbin {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.image=loadImage(PAPERIMAGE.png);
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
        var posBottom=
        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        rectMode(CENTER);
    
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
      

    }
  };
  
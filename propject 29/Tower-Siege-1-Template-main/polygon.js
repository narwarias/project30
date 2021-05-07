class Polygon{
    constructor(x,y,width,height){

        var options={
            density:0.8


        }

        this.body=Bodies.rectangle(x, y, width, height,options);
       this.image=loadImage("polygon.png")
       this.width=width;
       this.height=height;


        World.add(world, this.body);
      
    }
    display(){
        var pos=this.body.position;
        image (this.image,pos.x,pos.y,this.width,this.height);




    }

}


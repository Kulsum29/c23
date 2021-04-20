class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8
        }
     
        this.body = Bodies.rectangle(x,y,width, height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
     
    }
    display(){

        var p=this.body.position
        var a=this.body.angle
        push();
        translate(p.x,p.y)
        rotate(a);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}
class Box{

constructor(x,y,width,height){

var Box_option={
    restitution:1.0,
    density:0.5,
    friction:1.0
    

}


this.body=Bodies.rectangle(x,y,width,height,Box_option);
this.width=width;
this.height=height;
World.add(world,this.body);


}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
angleMode(RADIANS);

rectMode(CENTER);

fill("brown");
rect(0,0,this.width,this.height);
pop();
}

}
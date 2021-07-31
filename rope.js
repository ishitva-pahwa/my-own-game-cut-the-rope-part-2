class Rope{

constructor(bodyA,bodyB,length)
{
var options={
    stiffness:1,
    bodyA:bodyA,
    bodyB:bodyB,
    length:length,
}
this.rope = Constraint.create(options);
World.add(world.this.rope)
}
display(){
if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
}

}
}
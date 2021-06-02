class Polygon{
    constructor(x, y, r) {
        var options = {
                     
        }
        polygon = Bodies.circle(50,200,20);
        World.add(world, polygon);
        polygon = addImage(polygon_img);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(polygon_img,polygon.position.x,polygon.position.y,40,40);
        pop();
      }
}

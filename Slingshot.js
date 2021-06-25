class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.Img1 = loadImage("sprites/sling1.png");
        this.Img2 = loadImage("sprites/sling2.png");
        this.Img3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            image(this.Img3,pointA.x-30,pointA.y-10,15,30);
            if(pointA.x<220 && pointA.x>100){
                strokeWeight(10);
                stroke(48,22,10);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
          }else{
              strokeWeight(3)
              stroke(48,22,10);
              line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
              line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
          }
        }

        image(this.Img1,200,20)
        image(this.Img2,170,20)

    }
   
}
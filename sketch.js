var fixrect, movrect;




function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(200,200,50,80);
  fixrect.shapeColor = "green";
  movrect = createSprite(400,200,80,30);
  movrect.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  console.log(movrect.x - fixrect.x)
  
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;
  
  if(movrect.x - fixrect.x < fixrect.width/2 + movrect.width/2
     && fixrect.x - movrect.x < fixrect.width/2 + movrect.width/2
     && movrect.y - fixrect.y < fixrect.height/2 + movrect.height/2
     && fixrect.y - movrect.y < fixrect.height/2 + movrect.height/2)
  {
    movrect.shapeColor = "red";
    fixrect.shapeColor = "red";
  }
  else 
  {
    movrect.shapeColor = "green";
    fixrect.shapeColor = "green";
  }

  
  drawSprites();
}
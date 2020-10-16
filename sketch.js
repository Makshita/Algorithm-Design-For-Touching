var fr,mr;

function setup()
 {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 80);
  fr.shapeColor = "green"
  mr = createSprite(400,200,80,30);
  mr.shapeColor = "green"
}

function draw() 
{
  background(0,0,0);  
  mr.x = World.mouseX;
  mr.y=World.mouseY;

 console.log(mr.x-fr.x);
  if(mr.x-fr.x < fr.width/2 + mr.width/2 && fr.x-mr.x< fr.width/2+ mr.width/2 && 
    mr.y-fr.y < fr.height/2 + mr.height/2 && fr.y-mr.y< fr.height/2+ mr.height/2 )
  {
    fr.shapeColor= "blue";
    mr.shapeColor = "blue";
  }
  else
  {
    fr.shapeColor= "green";
    mr.shapeColor = "green";
  }

  
  drawSprites();
}
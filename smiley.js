window.onload = function() {
  var canvas = document.getElementById("smiley");
  var context = canvas.getContext("2d");
  
  // draw big circle
  context.beginPath();
  context.arc(200,150,100,0,degreesToRadians(360),true);
  context.fillStyle = "#F9ED22";
  context.fill();
  context.stroke();
  
  // left eye
  context.beginPath();
  context.arc(155,120,10,0,degreesToRadians(360),true);
  context.stroke();
  
  // right eye
  context.beginPath();
  context.arc(245,120,10,0,degreesToRadians(360),true);
  context.stroke();
  
  // nose
  context.beginPath();
  context.moveTo(200,140);
  context.lineTo(200,170);
  context.closePath();
  context.lineWidth = 2;
  context.stroke();
  
  // mouth
  context.beginPath();
  context.arc(200,180,40,degreesToRadians(20),degreesToRadians(160),false);
  context.stroke();
}




function degreesToRadians(degrees) {
  return (degrees * Math.PI)/180; 
}

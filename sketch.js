var raio = 150;
var cx, cy;
var px, py;
var destaque_theta;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  // centro do desenho e do circulo
  cx = width / 2;
  cy = height / 2;
}

function draw() {
 background(220);

  
  
	fill(240)
	strokeWeight(1) 
  ellipse(cx, cy, 450);
  fill(255)
  ellipse(cx, cy, 420);  
  fill(0)  
  ellipse(cx, cy, 20);
  
  strokeWeight(4) 
  
  triangle(cx+raio, cy, cx+raio-20, cy+10, cx+raio-20, cy-10);
	fill(20,104,230)
  line(cx, cy, cx + raio-20, cy);	

  fill(0);	
  triangle(cx, cy-raio-20, cx-10, cy-raio, cx+10, cy-raio);
  fill(20,30,240)
  line(cx, cy, cx, cy-raio-20);  
  
  for (var angulo = 0; angulo <= 360; angulo += 30) {
    // transforma o angulo de
    // coord polar para coord cartesiana
    var x = cos(radians(angulo)) * raio*1.28;
    var y = sin(radians(angulo)) * raio*1.28;

    // desenha uma elipse na coord (x,y)
    // corrige (x,y) para (x+cx,y+cy)
    textStyle(BOLD);
    textSize(20);    
    if(angulo == 270){
    	text('12', x + cx, y + cy);
    }else if(angulo==360){
    	text('3', x + cx, y + cy);
    }else if(angulo==300){
    	text('1', x + cx, y + cy);
    }else if(angulo==330){
    	text('2', x + cx, y + cy);
    }else if(angulo==30){
    	text('4', x + cx, y + cy);
    }else if(angulo==60){
    	text('5', x + cx, y + cy);
    }else if(angulo==90){
    	text('6', x + cx, y + cy);
    }else if(angulo==120){
    	text('7', x + cx, y + cy);
    }else if(angulo==150){
    	text('8', x + cx, y + cy);
    }else if(angulo==180){
    	text('9', x + cx, y + cy);
    }else if(angulo==210){
    	text('10', x + cx, y + cy);
    }else if(angulo==240){
    	text('11', x + cx, y + cy);
    }
    
    
  }
}
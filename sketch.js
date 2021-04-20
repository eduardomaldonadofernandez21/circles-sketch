let circles=[]
var r=true;
function setup() {
  createCanvas(600,600)
}
function draw() {
  background(10)
  textSize(12)
  fill(255)
  noStroke()
  text("Para añadir/quitar relleno a los círculos pulse 'r'\nPara limpiar la pantalla pulse 'b'",20 ,20)
   text("©E.M.F.", 500 , 580 )
  for (let i = 0;i < circles.length;i++) {
    circles[i].setPoint(random(-4,4),random(-4,4))
    circles[i].print()
  }
}
function keyTyped(){
  if(key=='r'){
    r=!r
  }
  if(key=='b'){
    circles=[]
  }
}
function mouseDragged ( ) { 
  let c=new Circle(mouseX,mouseY,15)  
  circles.push(c)
}
class Circle{
  constructor(x, y, w) {
    this.x=x
    this.y=y
    this.w=w 
  }  
  setPoint(nX, nY) {
    this.x=this.x+nX
    this.y=this.y+nY
  } 
  print() {
    let r1=random(0,255)
    let r2=random(0,255)
    let r3=random(0,255)
    if(!r){
      noFill()
      stroke(r1,r2,r3)
    }
    if(r){
      fill(r1,r2,r3)
    }
    ellipseMode(CENTER)
    ellipse(this.x,this.y,this.w)
  }  
}
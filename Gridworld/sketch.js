let field
let player1


function setup(){
  createCanvas(windowWidth, windowHeight)
  field = new Field()
  field.setup(400, 400, 20, (windowWidth-800)/2, (windowHeight-400)/2-50)
  field.initialize()
  field.createMaze1()
  player1 = new Player()
  player1.init(10,10,2, field.field)

}

function draw(){
  background(0)
  player1.sense(field.field)
  player1.decide()
  player1.act(field.field)
  field.drawMaze()

}

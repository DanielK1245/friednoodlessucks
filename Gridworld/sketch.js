let field
let player1
let confirm

function setup() {

  createCanvas(windowWidth, windowHeight)

  field = new Field()
  field.setup(400, 400, 20, (windowWidth - 800) / 2, (windowHeight - 400) / 2 - 50)
  field.initialize()
  field.createMaze1()

  player1 = new Player()
  player1.init(10, 10, 2, field.field)

  confirm = createButton('Play/Pause')
  confirm.position(windowWidth/2-100,550)
  confirm.mousePressed(flip)

}

function draw() {
  field.paint()
  if (frameCount % 40 == 1) {
    background(0)
    player1.doAll(field.field)
    field.drawMaze()
  }
}

function flip(){
  player1.confirm = !player1.confirm
  field.confirm = !field.confirm
}

let field
let lockerRoom = []
let confirm
let confirm1 = false
let playerNum


function setup() {

  createCanvas(windowWidth, windowHeight)
  background(0)

  confirm = createButton('Play/Pause')
  confirm.position(windowWidth-110,50)
  confirm.mousePressed(flip)

  /*fill(255)
  textSize(15)
  text('Players:', windowWidth-100, 130)*/

  playerNum = createCheckbox('Add Player', false)
  playerNum.position(windowWidth-100, 130)
  playerNum.changed(addPlayers)

  field = new Field()
  field.setup(400, 400, 20, (windowWidth - 800) / 2, (windowHeight - 400) / 2 - 50)
  field.initialize()
  field.createMaze1()

}

function addPlayers(){
  if(confirm1) return
  let num = playerNum.value()

  for(let a = 0; a < num; a++){
    lockerRoom.push(new Player())
    if (mouseIsPressed) {
       if(mouseButton == CENTER){
         let i = floor((mouseX - field.xpos) / field.w)
         let j = floor((mouseY - field.ypos) / field.w)
         if ((i >= 0 && i < this.column) && (j >= 0 && j < this.row))
           lockerRoom[i].init(i, j, 2, field.field)
       }
    }
  }
}

function draw() {
  field.paint(lockerRoom)
  field.drawMaze()
  if (frameCount % 40 == 1) {

    for(let i = 0; i < lockerRoom.length; i++){
      lockerRoom[i].doAll(field.field)
    }
    field.drawMaze()
  }
}

function flip(){
  for(let i = 0; i < lockerRoom.length; i++){
    lockerRoom[i].confirm = !lockerRoom[i].confirm
  }
  field.confirm = !field.confirm
}

function fieldInit(){

}

let field
let lockerRoom = []
let confirm
let confirm1 = false
let playerNum
let paintSwitch = false
let sliderX
let sliderY


function setup() {

  createCanvas(windowWidth, windowHeight)


  confirm = createButton('Play/Pause')
  confirm.position(windowWidth-110,50)
  confirm.mousePressed(playPause)

  /*fill(255)
  textSize(15)
  text('Players:', windowWidth-100, 130)*/

  playerNum = createCheckbox('Add Player', false)
  playerNum.position(windowWidth-110, 100)
  playerNum.changed(flipPaint)

  sliderX = createSlider(0, windowWidth-130, 400)
  sliderX.position(windowWidth-110, 130)
  sliderY = createSlider(0, windowWidth-130, 400)
  sliderY.position(windowWidth-110, 160)

  field = new Field()
  field.setup(400, 400, 25, (windowWidth - 800) / 2, (windowHeight - 400) / 2 - 50)
  field.initialize()
  field.createMaze1()

}

function addPlayers(){
  if(confirm1) return

    lockerRoom.push(new Player())
    if (mouseIsPressed) {
       if(mouseButton == LEFT){
         let i = floor((mouseX - field.xpos) / field.w)
         let j = floor((mouseY - field.ypos) / field.w)
         if ((i >= 0 && i < this.column) && (j >= 0 && j < this.row))
           lockerRoom[i].init(i, j, 2, field.field)
       }
    }
}

function draw() {
  if(!confirm){
    field.x = sliderX.value()
    field.y = sliderY.value()
  }

  if(paintSwitch){
    field.paint(lockerRoom)
  }
  else{
    addPlayers()
  }
  field.drawMaze()
  if (frameCount % 40 == 1) {

    for(let i = 0; i < lockerRoom.length; i++){
      lockerRoom[i].doAll(field.field)
    }
    field.drawMaze()
  }
}

function playPause(){
  for(let i = 0; i < lockerRoom.length; i++){
    lockerRoom[i].confirm = !lockerRoom[i].confirm
  }
  field.confirm = !field.confirm
  confirm1 = !confirm1
}

function flipPaint(){
  paintSwitch = !paintSwitch
}

function fieldInit(){

}

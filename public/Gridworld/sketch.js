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
  confirm.position(windowWidth - 220, 50)
  confirm.mousePressed(playPause)

  playerNum = createCheckbox('Add Player', false)
  playerNum.position(windowWidth - 220, 100)
  playerNum.changed(flipPaint)

  field = new Field()
  field.setup(400, 400, 25, (windowWidth - 800) / 2, (windowHeight - 400) / 2 - 50)
  field.initialize()
  field.createMaze1()
}

function addPlayers() {
  if (confirm1) return

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {

      let i = floor((mouseX - field.xpos) / field.w)
      let j = floor((mouseY - field.ypos) / field.w)

      if ((i >= 0 && i < field.column) && (j >= 0 && j < field.row)) {
        console.log('think!')
        let temp = new Player()
        temp.init(i, j, 2, field)
        lockerRoom.push(temp)
        // console.log({'lockerroom': lockerRoom.length})
      }

    }
  }
}

function draw() {
  if (!paintSwitch) {
    field.paint(lockerRoom)
  } else {
    addPlayers()
  }
  field.drawMaze()
  if (lockerRoom.length > 0) {
    if (frameCount % 40 == 1) {

      for (let i = 0; i < lockerRoom.length; i++) {
        lockerRoom[i].doAll(field.field)
      }
      field.drawMaze()
    }
  }
}

function playPause() {
  for (let i = 0; i < lockerRoom.length; i++) {
    lockerRoom[i].confirm = !lockerRoom[i].confirm
  }
  field.confirm = !field.confirm
  confirm1 = !confirm1
}

function flipPaint() {
  paintSwitch = !paintSwitch
}

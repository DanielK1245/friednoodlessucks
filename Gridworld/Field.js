function Field() {
  this.column = 0
  this.row = 0
  this.w = 0
  this.field = []
  this.xpos = 0
  this.ypos = 0
  this.x = 0
  this.y = 0


  this.setup = function(x, y, w, xpos, ypos) {
    this.w = w
    this.x = x
    this.y = y
    this.column = floor(this.x / w)
    this.row = floor(this.y / w)
    this.field = new Array(this.column)
    this.xpos = xpos
    this.ypos = ypos


    for (let i = 0; i < this.column; i++)
      this.field[i] = new Array(this.row)
  }

  this.initialize = function() {
    for (let i = 0; i < this.field.length; i++)
      for (let j = 0; j < this.field[i].length; j++) {
        this.field[i][j] = 0
      }
  }

  this.createMaze1 = function() {
    for (let i = 0; i < this.column; i++) {
      this.field[i][0] = 1
    }
    for (let i = 0; i < this.column; i++) {
      this.field[i][this.row - 1] = 1
    }
    for (let i = 0; i < this.row; i++) {
      this.field[0][i] = 1
    }
    for (let i = 0; i < this.row; i++) {
      this.field[this.column - 1][i] = 1
    }
    //walls ^
  }

  this.paint = function(lockerRoom) {
    if(this.confirm) return
     if (mouseIsPressed) {
        let i = floor((mouseX - this.xpos) / this.w)
        let j = floor((mouseY - this.ypos) / this.w)
        if(mouseButton == LEFT){
          if ((i >= 0 && i < this.column) && (j >= 0 && j < this.row))
            if(!this.noOverlap(lockerRoom, i, j))
              this.field[i][j] = 1
        }
        if(mouseButton == RIGHT){
          if ((i >= 0 && i < this.column) && (j >= 0 && j < this.row) && this.field[i][j] == 1)
            if(!this.noOverlap(lockerRoom, i, j))
              this.field[i][j] = 0
        }
     }
  }

  this.noOverlap = function(lockerRoom, i, j){
    let judge = false
    for(let a = 0; a < lockerRoom.length; a++){
      if(lockerRoom[a].x == i && lockerRoom[a].y == j)
        judge = true
    }
    return judge
  }

  this.drawMaze = function() {
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++) {
        if (this.field[i][j] == 1) fill(0)
        else if (this.field[i][j] == 2) fill(255, 204, 0)
        else fill(255)
        stroke(100)
        rect(this.xpos + this.w * i, this.ypos + this.w * j, this.w - 1, this.w - 1)
      }
    }
  }
}

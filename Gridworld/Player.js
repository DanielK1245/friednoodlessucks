function Player() {
  this.surroundings = new Array(8)
  this.x1 = false
  this.x2 = false
  this.x3 = false
  this.x4 = false
  this.x = 0
  this.y = 0
  this.id = 0
  this.confirm = false

  this.init = function(x, y, id, field) {
    this.id = id
    this.x = x
    this.y = y
    field[this.x][this.y] = 2
    for (let i = 0; i < this.surroundings.length; i++) {
      this.surroundings[i] = 0
    }
  }

  this.identity = function() {
    return this.id
  }

  this.doAll = function(field) {
    if(!this.confirm) return
    this.sense(field)
    this.decide()
    this.act(field)
  }

  this.sense = function(field) {
    let inc = 0
    console.log(this.x)
    console.log(this.y)
    for (let a = -1; a <= 1; a++) {
      for (let b = -1; b <= 1; b++) {
        if (!(a == 0 && b == 0)) {
          this.surroundings[inc++] = field[this.x + a][this.y + b]
        }
      }
    }
    console.log(this.surroundings)
  }

  this.decide = function() {
    if (this.surroundings[3] == 1 || this.surroundings[5] == 1) {
      this.x1 = true
    }if (this.surroundings[6] == 1 || this.surroundings[7] == 1) {
      this.x2 = true
    }if (this.surroundings[4] == 1 || this.surroundings[2] == 1) {
      this.x3 = true
    }if (this.surroundings[1] == 1 || this.surroundings[0] == 1) {
      this.x4 = true
    }
  }

  this.act = function(field) {
    if (this.x1 && !this.x2) {
      field[this.x][this.y] = 0
      field[++this.x][this.y] = 2
      console.log(1)
      this.reset()
    } else if (this.x2 && !this.x3) {
      field[this.x][this.y] = 0
      field[this.x][++this.y] = 2
      console.log(2)
      this.reset()
    } else if (this.x3 && !this.x4) {
      field[this.x][this.y] = 0
      field[--this.x][this.y] = 2
      console.log(3)
      this.reset()
    } else if (this.x4 && !this.x1) {
      field[this.x][this.y] = 0
      field[this.x][--this.y] = 2
      console.log(4)
      this.reset()
    } else {
      field[this.x][this.y] = 0
      field[this.x][--this.y] = 2
      console.log(5)
    }
  }

  this.reset = function(){
    this.x1 = false
    this.x2 = false
    this.x3 = false
    this.x4 = false
  }

}

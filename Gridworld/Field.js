function Field() {
   this.column = 0
   this.row = 0
   this.w = 0
   this.field = []

   this.confirm = false

   this.setup = function(x, y, w, xpos, ypos) {
      this.w = w;
      this.column = floor(x / w)
      this.row = floor(y / w)
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
         this.field[i][this.row-1] = 1
      }
      for (let i = 0; i < this.row; i++) {
         this.field[0][i] = 1
      }
      for (let i = 0; i < this.row; i++) {
         this.field[this.column-1][i] = 1
      }
      //walls ^

    }

   this.drawMaze = function() {
      for (let i = 0; i < this.column; i++) {
         for (let j = 0; j < this.row; j++) {
            if (this.field[i][j] == 1) fill(0)
            else if(this.field[i][j].identity == 2) fill(255,204,0)
            else fill(255)
            stroke(100)
            rect(this.xpos + this.w * i, this.ypos + this.w * j, this.w - 1, this.w - 1)
         }
      }
   }
  }
  

  function Player(){
    this.surroundings = new Array(8)
    this.x1 = false
    this.x2 = false
    this.x3 = false
    this.x4 = false
    this.x = 0
    this.y = 0
    this.id = 0

    this.init = function(x, y, id){
      this.id = id
      this.x = x
      this.y = y
      this.field[this.x][this.y] = 2
      for(let i = 0; i < this.surroundings.length; i++){
        this.surroundings[i] = 0
      }

    }

    this.identity = function(){
      return this.id
    }

    this.sense = function(){
      for (let a = -1; a <= 1; a++) {
         for (let b = -1; b <= 1; b++) {
           if(a != 0 && b!= 0){
             let inc = 0
             console.log(inc)
             this.surroundings[inc++] = this.field[this.x+a][this.y+b]

           }
         }
      }
    }

    this.decide = function(){
      if(this.surroundings[3] == 1 || this.surrounds[5] == 1){
        this.x1 = true
      }
      if(this.surroundings[6] == 1 || this.surrounds[7] == 1){
        this.x2 = true
      }
      if(this.surroundings[2] == 1 || this.surrounds[4] == 1){
        this.x3 = true
      }
      if(this.surroundings[0] == 1 || this.surrounds[1] == 1){
        this.x4 = true
      }
    }

    this.act = function(){
      if(this.x1 == true && this.x2 == false){
        this.field[this.x++][this.y] = 2
        this.field[this.x][this.y] = 0
      }
      else if(this.x2 == true && this.x3 == false){
        this.field[this.x][this.y++] = 2
        this.field[this.x][this.y] = 0
      }
      else if(this.x3 == true && this.x4 == false){
        this.field[this.x--][this.y] = 2
        this.field[this.x][this.y] = 0
      }
      else if(this.x4 == true && this.x1 == false){
        this.field[this.x][this.y--] = 2
        this.field[this.x][this.y] = 0
      }
      else{
        this.field[this.x][this.y--] = 2
        this.field[this.x][this.y] = 0
      }

    }}

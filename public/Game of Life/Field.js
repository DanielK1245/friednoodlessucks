function Field() {
   this.column = 0
   this.row = 0
   this.w = 0
   this.field = []
   this.field2 = []
   this.confirm = false

   this.setup = function(x, y, w, xpos, ypos) {
      this.column = floor(x / w)
      this.row = floor(y / w)
      this.field = new Array(this.column)
      this.field2 = new Array(this.column)
      this.xpos = xpos
      this.ypos = ypos
      this.w = w;

      for (let i = 0; i < this.column; i++)
         this.field[i] = new Array(this.row)
      for (let i = 0; i < this.column; i++)
         this.field2[i] = new Array(this.row)
   }

   this.initialize = function() {
      for (let i = 0; i < this.field.length; i++)
         for (let j = 0; j < this.field[i].length; j++) {
            this.field[i][j] = 0
            this.field2[i][j] = 0
         }
   }

   this.paint = function() {
      if (mouseIsPressed) {
         let i = floor((mouseX - this.xpos) / this.w)
         let j = floor((mouseY - this.ypos) / this.w)
         if ((i >= 0 && i < this.column) && (j >= 0 && j < this.row)) this.field[i][j] = 1
      }
   }

   this.draw = function() {
      // console.log(w)
      for (let i = 0; i < this.column; i++) {
         for (let j = 0; j < this.row; j++) {
            if (this.field[i][j] == 1) fill(0)
            else fill(255)
            stroke(100)
            rect(this.xpos + this.w * i, this.ypos + this.w * j, this.w - 1, this.w - 1)
         }
      }
   }

   this.sketch = function() {
      if (this.confirm === false) return
      for (let i = 0; i < this.column; i++) {
         for (let j = 0; j < this.row; j++) {
            let sum = this.sumNeighbors(i, j);
            if (this.field[i][j] == 0 && sum == 3) this.field2[i][j] = 1;
            else if (this.field[i][j] == 1 && sum <= 1) this.field2[i][j] = 0;
            else if (this.field[i][j] == 1 && sum > 3) this.field2[i][j] = 0;
            else this.field2[i][j] = this.field[i][j];
         }
      }
      //swap arrays
      let temp = this.field;
      this.field = this.field2;
      this.field2 = temp;
   }

   this.sumNeighbors = function(x, y) {
      if (x == 0 || y == 0 || x == this.column-1 || y == this.row-1) return 0
      let sum = 0
      for (let a = -1; a <= 1; a++) {
         for (let b = -1; b <= 1; b++) {
            sum += this.field[x + a][y + b]
         }
      }
      return sum -= this.field[x][y]; //take out own value
   }

   this.randomize = function() {
      for(let i = 0; i < this.column; i++){
         for(let j = 0; j < this.row; j++){
            this.field[i][j] = floor(Math.random() * 2)
         }
      }
      this.confirm = false
   }
}

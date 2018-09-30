function World(){

   this.array = []

   this.setup = function(cell1, cell2){
      this.array = new Array(2)
      this.array[0] = cell1
      this.array[1] = cell2
   }

   this.drawWorld = function(){
      stroke(0)
      if(this.array[0] == 1)
      fill('red')
      else {
         fill(255)
      }

      rect(200, 100, 400, 400)

      if(this.array[1] == 1)
      fill('red')
      else {
         fill(255)
      }
      rect(600, 100, 400, 400)

   }
}

function Sucker() {

   this.position = 0
   this.array = []

   this.setup = function(pos, array) {
      this.position = pos
      this.array = array
   }
   this.clean = function() {
      console.log('position '+this.position)
      console.log('array1 '+this.array[0])
      console.log('array2 '+this.array[1])
      if(this.array[0] == 0 && this.array[1] == 0)
         console.log('done')
      else if (this.array[this.position] == 0 && this.position == 0)
         this.position++
      else if (this.array[this.position] == 1 && this.position == 0)
         this.array[this.position] = 0
      else if (this.array[this.position] == 0 && this.position == 1)
         this.position--
      else if (this.array[this.position] == 1 && this.position == 1)
         this.array[this.position] = 0
   }
   this.drawSucker = function() {

      if (this.position == 0) {
         image(suckerPic, 230, 130, suckerPic.width/2, suckerPic.height/2)
         //rect(230, 130, 200, 75)
      } else {
         image(suckerPic, 630, 130, suckerPic.width/2, suckerPic.height/2)
         //rect(630, 130, 200, 75)
      }

   }
}

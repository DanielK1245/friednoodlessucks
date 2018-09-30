function Source() {
   this.img;
   this.x = 0;
   this.y = 0;
   this.r = 10;

   this.all = function(){
      this.position()
      this.preload()
      this.draw()
   }

   this.position = function() {
      if (mouseIsPressed) {
         if (mouseButton === LEFT) {
            if ((mouseX >= this.x - this.r && mouseX <= this.x - this.r) && (mouseY >= this.y - this.r && mouseY <= this.y - this.r)) {
               this.x = mouseX;
               this.y = mouseY;
            }
         }
      }
   }

   this.preload = function() {
      img = loadImage('../images/sun.jpg')
   }

   this.draw = function() {
      image(img, this.x + this.r, this.y + this.r, 2 * this.r, 2 * this.r)
   }


}

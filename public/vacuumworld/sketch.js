let next
let isNext = true
let world
let sucker
let array
let suckerPic

function preload(){
   suckerPic = loadImage('vacuum.png')
}

function setup() {
   createCanvas(windowWidth, windowHeight)

   next = createButton('Next')
   next.position(windowWidth/2-40, windowHeight-80)
   next.mousePressed(nextMove)
   console.log(next.x)
   console.log(next.y)

   world = new World()
   world.setup(1, 0)
   array = world.array

   sucker = new Sucker()
   sucker.setup(1, array)
}

function draw() {
   if (isNext) {

      world.drawWorld()
      sucker.drawSucker()
      sucker.clean()

      isNext = !isNext
   }
}

function nextMove(){
   isNext = !isNext
}

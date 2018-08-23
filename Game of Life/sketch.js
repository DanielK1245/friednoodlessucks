let field
let confirm, random

function setup() {
   createCanvas(windowWidth, windowHeight)

   field = new Field()
   field.setup(800, 400, 20, (windowWidth-800)/2, (windowHeight-400)/2-50)
   field.initialize()

   confirm = createButton('Play/Pause')
   confirm.position(windowWidth/2-100,550)
   confirm.mousePressed(flip)

   random = createButton('Random')
   random.position(windowWidth/2+100, 550)
   random.mousePressed(randomize)
}

function draw() {
   field.paint()
   field.draw()
   field.sketch()
}

function flip() {
   field.confirm = !field.confirm
}

function randomize() {
   field.randomize()
   flip()
}

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const collisionsMap=[];
for (let i = 0 ; i<collisions.length ; i+=70){
    collisionsMap.push( collisions.slice(i,i+70))
}

class Boundary {
    static width =42
    static height =42
    constructor({position}){
        this.position=position
        this.width = 42
        this.height = 42
    }

    draw() {
        context.fillStyle='red'
        context.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

const boundaries = [];
const offset = {
    x:-500,
    y:-30
}

collisionsMap.forEach((row,i) => {
    row.forEach((symbol,j) =>{
        if(symbol===1025)
        boundaries.push(new Boundary({position:{
            x: j*Boundary.width + offset.x,
            y: i*Boundary.height + offset.y
        }
    })
    )
    })
})


console.log(boundaries);

const image = new Image();
image.src='mainpage.png'


const playerImage = new Image();
playerImage.src = 'Images/playerDown.png';

class Sprite{
    constructor({position, velocity , image}){
        this.position = position
        this.image = image
    }

    draw(){
        context.drawImage(this.image,this.position.x,this.position.y)
    }
}

const background = new Sprite({
    position : {
     x : offset.x,
     y : offset.y
    },
    image: image
});

const keys = {
    w:{
        pressed : false
    },
    a:{
        pressed : false
    },
    s:{
        pressed : false
    },
    d:{
        pressed : false
    }
}

const testBoundary = new Boundary({
    position : {
        x:400,
        y:400
    }
})

const movables = [background,testBoundary]


function animate() {
    window.requestAnimationFrame(animate)
    background.draw();
    // boundaries.forEach(boundary =>{
    //     boundary.draw()
    // })
    testBoundary.draw()
    context.drawImage(playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height,
        canvas.width/2 - playerImage.width/4/2,
        canvas.height/2-playerImage.height/2,
        playerImage.width/4,
        playerImage.height
        )

    if(player.position)

    if(keys.w.pressed && lastkey==='w') {
        movables.forEach((movable) =>{
            movable.position.y+=3
        })
    }
    else if(keys.a.pressed && lastkey==='a'){
        movables.forEach((movable) =>{
            movable.position.x+=3
        })
    }else if(keys.s.pressed && lastkey==='s'){
        movables.forEach((movable) =>{
            movable.position.y-=3
        })
    }else if(keys.d.pressed && lastkey==='d'){
        movables.forEach((movable) =>{
            movable.position.x-=3
        })
    }
}
animate();

let lastkey ='';
window.addEventListener('keydown',(e)=> {
    
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            lastkey='w';
            break;
    
        case 'a':
            keys.a.pressed = true;
            lastkey='a';
            break;
    
        case 's':
            keys.s.pressed = true;
            lastkey='s';
            break;
    
                    
        case 'd':
            keys.d.pressed = true;
            lastkey='d';
            break;
                
        default:
            break;
    }
})

window.addEventListener('keyup',(e)=> {
    
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            break;
    
        case 'a':
            keys.a.pressed = false;
            break;
    
        case 's':
            keys.s.pressed = false;
            break;
    
                    
        case 'd':
            keys.d.pressed = false;
            break;
                
        default:
            break;
    }
})
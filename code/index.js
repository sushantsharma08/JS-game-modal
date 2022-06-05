const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0,0,canvas.width, canvas.height);

const image = new Image();
image.src='mainpage.png'


const playerImage = new Image();
playerImage.src = 'Images/playerDown.png';

class Sprite{
    constructor({position, velocity , image}){
        this.position = this.position
        this.image = image
    }

    draw(){
        context.drawImage(this.image,-500,-30);
    }
}

const background = new Sprite({
    position:{
     x:-500,
     y:-30
    },
    image: image,
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

function animate() {
    window.requestAnimationFrame(animate)
    background.draw();
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
}
animate();

window.addEventListener('keydown',(e)=> {
    
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            break;
    
        case 'a':
            keys.a.pressed = true;
            break;
    
        case 's':
            keys.s.pressed = true;
            break;
    
                    
        case 'd':
            keys.d.pressed = true;
            break;
                
        default:
            break;
    }
})
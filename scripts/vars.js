//this document is for declaring variables, mainly to keep them organized.
//functions, classes, and objects are also declared here.

const canvas = document.getElementById("canv");//configures the canvas
var ctx = canvas.getContext("2d");//sets the canvas to render in 2d

var pageWidth = window.innerWidth;//getting the window width
var pageHeight = window.innerHeight;//getting the window height

function setCanvasSize(){//sets the canvas borders to the window borders
    pageWidth = window.innerWidth;//getting the window width
    pageHeight = window.innerHeight;//getting the window height
    canvas.width = pageWidth;//setting the canvas width to the page width
    canvas.height = pageHeight;//setting the canvas height to the page height
}

var phase = "loading";//the current phase the game is running, title, main, credits, etc.

//functions and classes
// var particles = {
//     list:[],//a list of all particles
//     update:function(){//updates all particles contained in the particle list
//         let currentFill = ctx.fillStyle;
//         for(i=0;i<particles.list.length;i++){//for each particle in the list
//             if(particles.list[i].lifetime<=particles.list[i].lifespan){//if the particle's lifetime is larger or equal to its lifespan 
//                 ctx.fillStyle = particles.list[i].color//sets the fill style to the particle's color
//                 ctx.fillRect(particles.list[i].x-(particles.list[i].size/2),particles.list[i].y-(particles.list[i].size/2),particles.list[i].size,particles.list[i].size);//draws the particle
                
//                 particles.list[i].speed = particles.list[i].speed/particles.list[i].friction;//changes the speed based on the amount of friction

//                 particles.list[i].x+=particles.list[i].speed * Math.cos(particles.list[i].angle);//adjusts the particle's speed on X
//                 particles.list[i].y+=particles.list[i].speed * Math.sin(particles.list[i].angle);//adjusts the particle's speed on Y


//                 // particles.list[i].speedX=particles.list[i].speedX/particles.list[i].friction;//adjusts the particle's speed on X
//                 // particles.list[i].speedY=particles.list[i].speedY/particles.list[i].friction;//adjusts the particle's speed on Y
//                 particles.list[i].size = particles.list[i].size * (particles.list[i].sizeChange * Math.abs(1-(particles.list[i].lifetime/particles.list[i].lifespan))+1);
//                 //console.log(particles.list[i].lifetime/particles.list[i].lifespan)

//                 particles.list[i].lifetime++;//adds 1 to the particle's total lifetime each frame
//             }else{
//                 particles.list.splice(i,1);//removes the particle from the list if it has died
//             }
//         }
//         ctx.fillStyle = currentFill;//resets the fillStyle
//     }
// }
// class Particle {
//     constructor(x,y,color,speed,lifespan = 30,friction = 10,size = 10,gravity = 0,sizeChange = -0.05,angle = Math.random()*360){
//         this.x = x;//the initial x pos of the particle
//         this.y = y;//the initial y pos of the particle
//         this.color = color;//color of the particle
//         this.speed = speed;//the speed of the particle
//         this.friction = friction;//the amount the particle slows as it ages
//         this.size = size;//size of the particle
//         this.lifetime = 0;//how long the particle has lived
//         this.lifespan = lifespan;//how many game ticks the particle lives
//         this.gravity = gravity;//the amount the particle is affected by gravity
//         this.sizeChange = sizeChange;//the amount the particle changes in size over time
//         this.angle = angle;//the angle of the particle
//     }
// }

// function randomInt(min,max){
//     return Math.floor(Math.random()*(max-min))+min;
// }

// function emit(color,x,y,amount=1,maxSpeed=10,minSpeed=20,friction=1.5,size=10,life=30,gravity=0,scale=-0.05){
//     /**
//      * 
//      */
//     for(i=0;i<amount;i++){//make several particles, equal to amount
//         // let xVelocity = randomInt(minSpeed,maxSpeed)*Math.cos(Math.random()*360);
//         // let yVelocity = randomInt(minSpeed,maxSpeed)*Math.sin(Math.random()*360);
//         let particleSpeed = randomInt(minSpeed,maxSpeed)
//         particles.list.push(new Particle(x,y,color,particleSpeed,life,friction,size,0,scale));
//     }
// }
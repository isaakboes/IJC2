//setting up game
setCanvasSize();//sets the canvas size to the screen

setInterval(main,30);//runs the game loop every 30 ms


function main(){
    ctx.clearRect(0,0,pageWidth,pageHeight);//clears the canvas


    switch(phase){//a master switch statement to determine overaal actions
        case "loading":
            loadAssets();
        break;
        case "title":
            titleScreen();
        break;
        case "main":
            game();
        break;
    }

    particles.update();//renders particles
}

function titleScreen(){

    if(mouseDown)emit("#FF0000",mouseX,mouseY,100,100,50,2,10,40,40);
    
    //particles.list.push(new Particle(mouseX,mouseY,"#FF0000",randomInt(-particleSpeed,particleSpeed),randomInt(-particleSpeed,particleSpeed),30,randomInt(11,15)/10,10,0));

    //displays the title
    const knightSize = pageWidth/1.4;//sets the size of the knight rendered on the screen
    const startButtonSize = pageWidth/7;//sets the start button's size to be relative to the screen's size
    const titleSize = pageWidth/2;//sets the title header's size
    const titleOffset = pageWidth/8;//the seperation between the title and the start button

    ctx.drawImage(sprite.title,pageWidth/2-titleSize/2+(mouseX-pageWidth)/25,pageHeight/2-titleSize/16+(mouseY-pageHeight)/25,titleSize,titleSize/8);

    //button functionality for the start button
    if(mouseX>=pageWidth/2-startButtonSize/2+(mouseX-pageWidth)/20&&mouseX<=pageWidth/2-startButtonSize/2+(mouseX-pageWidth)/20+startButtonSize&&mouseY>=pageHeight/2-startButtonSize/4+titleOffset+(mouseY-pageHeight)/20&&mouseY<=pageHeight/2-startButtonSize/4+titleOffset+(mouseY-pageHeight)/20+startButtonSize/2){//button script
        ctx.drawImage(sprite.startButtonHover,pageWidth/2-startButtonSize/2+(mouseX-pageWidth)/20,pageHeight/2-startButtonSize/4+titleOffset+(mouseY-pageHeight)/20,startButtonSize,startButtonSize/2);

        if(mouseDown){//if the player clicks the button
            phase = "main";
        }
    }else{//if the cursor is not within the button
        ctx.drawImage(sprite.startButton,pageWidth/2-startButtonSize/2+(mouseX-pageWidth)/20,pageHeight/2-startButtonSize/4+titleOffset+(mouseY-pageHeight)/20,startButtonSize,startButtonSize/2);
    }

    //temp
    ctx.drawImage(sprite.titleKnight,pageWidth-knightSize+(pageWidth/6)+mouseX/10,pageHeight-knightSize+(pageHeight/6)+mouseY/10,knightSize,knightSize);//renders the knight relative to the page width
    ctx.drawImage(sprite.shotgun,pageWidth-knightSize*2+(pageWidth*0.4)+mouseX/4,pageHeight-knightSize*2+(pageHeight*1.1)+mouseY/4,knightSize*2,knightSize*2)

}

function game(){
    //the main game loop
    
}
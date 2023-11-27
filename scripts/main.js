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

}

function titleScreen(){

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

}

function game(){
    //the main game loop
    
}
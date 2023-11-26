//Image assets to load
const sprite = {}//declares 'sprite' as a new object
var loaded = 0;//the total loaded sprites
var loadError = 0;//the total files that caused errors
//generic pieces//
//pawn
sprite.blackPawn = new Image;
sprite.blackPawn.src = "./assets/pieces/generic/pawnBlack.png"
sprite.blackPawn.onload = function(){loaded ++}
sprite.blackPawn.onerror= function(){loadError ++}

sprite.whitePawn = new Image;
sprite.whitePawn.src = "./assets/pieces/generic/pawnWhite.png"
sprite.whitePawn.onload = function(){loaded ++}
sprite.whitePawn.onerror= function(){loadError ++}
//bishop
sprite.blackBishop = new Image;
sprite.blackBishop.src = "./assets/pieces/generic/bishopBlack.png"
sprite.blackBishop.onload = function(){loaded ++}
sprite.blackBishop.onerror= function(){loadError ++}

sprite.whiteBishop = new Image;
sprite.whiteBishop.src = "./assets/pieces/generic/bishopWhite.png"
sprite.whiteBishop.onload = function(){loaded ++}
sprite.whiteBishop.onerror= function(){loadError ++}

//rook
sprite.blackRook = new Image;
sprite.blackRook.src = "./assets/pieces/generic/rookBlack.png"
sprite.blackRook.onload = function(){loaded ++}
sprite.blackRook.onerror= function(){loadError ++}

sprite.whiteRook = new Image;
sprite.whiteRook.src = "./assets/pieces/generic/rookWhite.png"
sprite.whiteRook.onload = function(){loaded ++}
sprite.whiteRook.onerror= function(){loadError ++}
//knight
sprite.blackKnight = new Image;
sprite.blackKnight.src = "./assets/pieces/generic/knightBlack.png"
sprite.blackKnight.onload = function(){loaded ++}
sprite.blackKnight.onerror= function(){loadError ++}

sprite.whiteKnight = new Image;
sprite.whiteKnight.src = "./assets/pieces/generic/knightBlack.png"
sprite.whiteKnight.onload = function(){loaded ++}
sprite.whiteKnight.onerror= function(){loadError ++}
//king
sprite.blackKing = new Image;
sprite.blackKing.src = "./assets/pieces/generic/kingBlack.png"
sprite.blackKing.onload = function(){loaded ++}
sprite.blackKing.onerror= function(){loadError ++}

sprite.whiteKing = new Image;
sprite.whiteKing.src = "./assets/pieces/generic/kingWhite.png"
sprite.whiteKing.onload = function(){loaded ++}
sprite.whiteKing.onerror= function(){loadError ++}
//queen
sprite.blackQueen = new Image;
sprite.blackQueen.src = "./assets/pieces/generic/queenBlack.png"
sprite.blackQueen.onload = function(){loaded ++}
sprite.blackQueen.onerror= function(){loadError ++}

sprite.whiteQueen = new Image;
sprite.whiteQueen.src = "./assets/pieces/generic/queenWhite.png"
sprite.whiteQueen.onload = function(){loaded ++}// take the L brits
sprite.whiteQueen.onerror= function(){loadError ++}// take the L brits
//knook
sprite.blackKnook = new Image;
sprite.blackKnook.src = "./assets/pieces/generic/knookBlack.png"
sprite.blackKnook.onload = function(){loaded ++}
sprite.blackKnook.onerror= function(){loadError ++}

sprite.whiteKnook = new Image;
sprite.whiteKnook.src = "./assets/pieces/generic/knookWhite.png"
sprite.whiteKnook.onload = function(){loaded ++}
sprite.whiteKnook.onerror= function(){loadError ++}
//superKnight
sprite.blackSuperKnight = new Image;
sprite.blackSuperKnight.src = "./assets/pieces/generic/superKnightBlack.png"
sprite.blackSuperKnight.onload = function(){loaded ++}
sprite.blackSuperKnight.onerror= function(){loadError ++}

sprite.whiteSuperKnight = new Image;
sprite.whiteSuperKnight.src = "./assets/pieces/generic/superKnightWhite.png"
sprite.whiteSuperKnight.onload = function(){loaded ++}
sprite.whiteSuperKnight.onerror= function(){loadError ++}
//additions
//anime pieces//

//pixel pieces//

//special pieces//

//title//
sprite.startButton = new Image;
sprite.startButton.src = "./assets/title/start.png"
sprite.startButton.onload = function(){loaded ++}
sprite.startButton.onerror= function(){loadError ++}

sprite.startButtonHover = new Image;
sprite.startButtonHover.src = "./assets/title/startHover.png"
sprite.startButtonHover.onload = function(){loaded ++}
sprite.startButtonHover.onerror= function(){loadError ++}

sprite.title = new Image;
sprite.title.src = "./assets/title/itsjustchess.png"
sprite.title.onload = function(){loaded ++}
sprite.title.onerror= function(){loadError ++}

sprite.titleKnight = new Image;
sprite.titleKnight.src = "./assets/title/knight.png"
sprite.titleKnight.onload = function(){loaded ++}
sprite.titleKnight.onerror= function(){loadError ++}

sprite.shotgun = new Image;
sprite.shotgun.src = "./assets/title/shotgun.png"
sprite.shotgun.onload = function(){loaded ++}
sprite.shotgun.onerror= function(){loadError ++}

//misc assets//
sprite.testFile = new Image;
sprite.testFile.src = "./assets/testFile.png"
sprite.testFile.onload = function(){loaded ++}
sprite.testFile.onerror= function(){loadError ++}


//functions

let pctLoaded = 0;
function loadAssets(){
    console.log(loaded + " out of " + Object.entries(sprite).length)
    if(loadError > 0){
        console.log("failed to load " + loadError + " assets.");
    }
    if(loaded + loadError >= Object.entries(sprite).length){//checks if the amount of assets successfully loaded is equal to the assets needed
        if(loadError<0){
            alert(loadError + " assets failed to load. See console for more details.")
        }
        phase = "title";//switches the active screen to the title/menu screen
        console.log("loaded "+loaded+" out of "+Object.entries(sprite).length+" total assets, starting game.");//notifies the console
    }else{}
}
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

var lightBoardColor = 10; //TODO: Set these colors
var darkBoardColor = 200;

/**
 * TODO: Isaak could we change this to an object like I have team setup as? See board.js Line 117
 */
var phase = "loading";//the current phase the game is running, title, main, credits, etc.

/**
 * This variable stores the active team
 */
var activeTeam = Team.white;

/**
 * The default list of pieces for a normal chess game
 */
const defaultChessPieces = [
    new Rook(0,0,Team.black),
    new Knight(1,0,Team.black),
    new Bishop(2,0, Team.black),
    new Queen(3,0,Team.black),
    new King(4,0,Team.black),
    new Bishop(5,0,Team.black),
    new Knight(6,0,Team.black),
    new Rook(7,0,Team.black),

    new Pawn(0,1,Team.black),
    new Pawn(1,1,Team.black),
    new Pawn(2,1,Team.black),
    new Pawn(3,1,Team.black),
    new Pawn(4,1,Team.black),
    new Pawn(5,1,Team.black),
    new Pawn(6,1,Team.black),
    new Pawn(7,1,Team.black),
    
    new Rook(0,7,Team.white),
    new Knight(1,7,Team.white),
    new Bishop(2,7, Team.white),
    new Queen(3,7,Team.white),
    new King(4,7,Team.white),
    new Bishop(5,7,Team.white),
    new Knight(6,7,Team.white),
    new Rook(7,7,Team.white),

    new Pawn(0,6,Team.white),
    new Pawn(1,6,Team.white),
    new Pawn(2,6,Team.white),
    new Pawn(3,6,Team.white),
    new Pawn(4,6,Team.white),
    new Pawn(5,6,Team.white),
    new Pawn(6,6,Team.white),
    new Pawn(7,6,Team.white)
]

/**
 * This is the board for the game to run on
 */
var gameBoard = new Board(8, 8);

const defaultBoardPieceList = [
    
];
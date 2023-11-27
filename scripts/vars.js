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

var board = {};//the board variable, stores all tiles in play

class Board {
    constructor(){
        
    }
}
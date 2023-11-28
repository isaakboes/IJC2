class Board {
    constructor(sizeX=8,sizeY=8){
        this.x = sizeX;
        this.y = sizeY;
    }
    tiles = [];
    generateBoard(sizeX,sizeY){

    }
}

class Tile {
    constructor(){

    }
}
/**
 * Identifiers for different piece teams
 */
Team = {
    white,black
}

/**
 * In this implementation, each piece stores its location, size, team and type. Multi-tile pieces use their first index on each axis for their position
 */
class Piece {
    /**
     * @param {int} x index of the piece's i location; The index of the first tile the piece occupies
     * @param {int} y index of the piece's j location; The index of the first tile the piece occupies
     * @param {int} width the width of the piece in tiles
     * @param {int} height the height pf the piece in tiles
     * @param {Team} team the team of the piece using the team object. Team.white and Team.black are the common teams
     * @param {String} pieceName 
     */
    constructor(x, y, width,height,team){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.team = team;
    }
}

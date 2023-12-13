/**
 * This class stores a chess board which contains a list of tiles and a list of pieces
 */
class Board {
    /**
     * @param {int} width Width of the board in tiles
     * @param {int} height Height of the board in tiles
     * @param {Piece[]} pieces The list of pieces on the board (Defaults to the normal chess pieces)
     */
    constructor(width,height, pieces = defaultChessPieces){
        this.sizeX = width;
        this.sizeY = height;
        this.pieces = pieces;
        this.tiles = new Tile[width][height];

        //Sets the default color of each tile.
        for(var i = 0; i<this.tiles.length(); i++){
            for(var j = 0; j<this.tiles[i].length(); j++){
                //Sets the checkerboard color of each tile
                this.tiles[i][j].color = ((i+j)%2==0) ? lightBoardColor : darkBoardColor;
            }
        }

        //Sets the tile piece information
        this.updateTileData();
    }
    
    generateBoard(sizeX,sizeY){

    }
    /**
     * Gets the width of the board
     * @returns the width of the board
     */
    getWidth(){
        return this.sizeX;
    }
    /**
     * Gets the height of the board
     * @returns the height of the board
     */
    getHeight(){
        return this.sizeY;
    }
    /**
     * Gets the pieces on the board
     * @returns The list of Piece objects on this board
     */
    getPieces(){
        return this.pieces;
    }
    /**
     * Updates the data on pieces stored in each tile
     */
    updateTileData(){
        //Sets tile data to null for all pieces.
        for(var i = 0; i<this.tiles.length(); i++){
            for(var j = 0; j<this.tiles[i].length(); j++){
                tiles[i][j].setPieceTeam(null);
            }
        }

        for(var i = 0; i<this.pieces.length(); i++){
            if(pieces[i].getWidth()==1 && pieces[i].getHeight()==1){
                //Sets the tile at the index of the piece to have the same team stored as the piece
                tiles[pieces[i].getFirstXIndex()][pieces[i].getFirstYIndex()].setPieceTeam(pieces[i].Team);
            }else{
                //For multi tile pieces sets the index of all relevant tiles to the same team as the piece
                for(var x = 0; x<pieces[i].getWidth(); x++){
                    for(var y = 0; y<pieces[i].getHeight(); y++){
                        tiles[pieces[i].getFirstXIndex()+x][pieces[i].getFirstYIndex()+y].setPieceTeam(pieces[i].Team);
                    }
                }

            }
            
        }
    }
}

/**
 * This Tile object stores a few parameters specific to the tile. It also stores a bit of redundant information to save time
 */
class Tile {
    /**
     * @param {Color} color The color of the tile
     * @param {Team} pieceTeam The team of the piece on this tile. Or null. This information is redundant but will save time when checking through the board.
     */
    constructor(color, pieceTeam){
        this.color = color;
        this.pieceTeam = pieceTeam;
    }
    /**
     * Gets the team of the piece on it
     * @returns The team of the piece on the tile
     */
    getPieceTeam(){
        return this.pieceTeam;
    }
    /**
     * Sets a new team for the tile to store
     * @param {Team} team The new team to set the tile to have
     */
    setPieceTeam(team){
        this.pieceTeam = team;
    }
}
/**
 * Identifiers for different piece teams
 */
Team = {
    white,black
}

/**
 * This class stores a possible move a piece can make
 */
class Move {
    /**
     * This constructor is for all pieces.
     * @param {int} dx The horizontal motion of the move
     * @param {int} dy The vertical motion of the move. Note that for use of pawns, positive j values correspond to "forward" movements.
     * @param {boolean} repeated Can the move be repeated infinitely (i.e. bishops or rooks moves can be repeated until they run into something) Has a default value of False.
     */
    constructor(dx,dy,repeated = false){
        this.dx = dx;
        this.dy = dy;
        this.repeated = repeated;
    }
    /**
     * Gets the dx variable of this move
     * @returns Change in horizontal position
     */
    getDx(){
        return this.dx;
    }
    /**
     * Gets the dy variable of this move
     * @returns Change in vertical position
     */
    getDy(){
        return this.dy;
    }
    /**
     * Most moves have no special conditions so they don't have any checks here. Subclasses can extend this method to determine the move's validity
     * @param {int} pieceList the list of pieces on the board
     * @param {int} index the relevant move's pieces
     * @returns A boolean referring to whether or not the proposed move is valid
     */
    getValidity(pieceList, index) {
        return true;
    }
}

/**
 * In this implementation, each piece stores its location, size, team and type. Multi-tile pieces use their first index on each axis for their position
 * 
 */
class Piece {
    /**
     * @param {int} x index of the piece's i location; The index of the first tile the piece occupies
     * @param {int} y index of the piece's j location; The index of the first tile the piece occupies
     * @param {int} width the width of the piece in tiles
     * @param {int} height the height pf the piece in tiles
     * @param {Team} team the team of the piece using the team object. Team.white and Team.black are the common teams
     * @param {String} pieceName the name of the piece (For example, tyler)
     * @param {Move[]} moves the list of moves the piece can move in
     */
    constructor(x, y, width = 1,height = 1,team, moves){
        this.xPosition = x;
        this.yPosition = y;
        this.width = width;
        this.height = height;
        this.team = team;
        this.moves = moves;
        this.xPrevious = null;
        this.yPrevious = null;
    }
    
    /**
     * Gets the piece horizontal position
     * @returns Piece's x position
     */
    getX(){
        return this.xPosition;
    }
    /**
     * Gets the piece vertical position
     * @returns Piece's y position
     */
    getY(){
        return this.yPosition;
    }
    /**
     * Sets the X position of this piece
     * @param {int} x New X position
     */
    setX(x){
        this.xPosition = x;
    }
    /**
     * Sets the Y position of this piece
     * @param {int} y New Y position
     */
    setX(y){
        this.yPosition = y;
    }
    

    /** Gets the width of the piece
     * @returns piece width in board tiles
     */
    getWidth(){
        return this.width;
    }
    /** Gets the height of the piece
     * @returns piece height in board tiles
     */
    getHeight(){
        return this.height;
    }
    /** Gets the piece team
     * @returns {Team} the piece team
     */
    getTeam(){
        return this.team;
    }
    /**
     * Returns the moves of the piece
     * @returns {Move[]} The piece's move list
     */
    getMoves(){
        return this.moves;
    }

    /**
     * Gets the first X index that this piece occupies
     * @return {int} The x index of the first tile that this piece occupies
     */
    getFirstXIndex(){
        return this.x;
    }
    /**
     * Gets the first Y index that this piece occupies
     * @return {int} The y index of the first tile that this piece occupies
     */
    getFirstYIndex(){
        return this.y;
    }
    /**
     * Gets the last X index that this piece occupies
     * @return {int} The x index of the last tile that this piece occupies
     */
    getLastXIndex(){
        return this.x+this.width-1;
    }
    /**
     * Gets the last Y index that this piece occupies
     * @return {int} The y index of the last tile that this piece occupies
     */
    getLastYIndex(){
        return this.y+this.height-1;
    }

    /**
     * Gets all valid moves the piece can make to be used in highlighting the board.
     * @returns {int[][]} a 2d array corresponding to the dx and dy values of valid moves.
     */
    getValidMoves(){
        //TODO: Make this method iterate through all moves and return the valid ones
        //TODO: Checks the move validity for each move
        //TODO: Handles repeated moves
        //TODO: Ends repeated moves appropriately
        return null;
    }
    
    // /**
    //  * Moves a piece in accordance with a move from a given index.
    //  * @param {int} index The index of the move to move the piece with
    //  */
    // movePiece(index){
    //     this.xPrevious = this.xPosition;
    //     this.yPrevious = this.yPosition;
    //     this.xPosition += this.moves[index].getDx();
    //     this.yPosition += this.moves[index].getDy();
        
    // }
    
}

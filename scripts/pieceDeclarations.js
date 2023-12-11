/**
 * This file houses declarations for special moves and all pieces
 * Each piece has it's own child class of the Piece class.
 */

/**
 * This class is an extension of the move class. It is an instance of enPassant and it also has an modified getValidity() method
 */
class enPassant extends Move {
    constructor(dx){
        super(dx,1,false);
    }
    /**
     * Checks whether or not an enPassant move is possible in the given circumstances
     * @param {int} pieceList the list of pieces on the board
     * @param {int} index the relevant move's pieces
     * @returns A boolean referring to whether or not the proposed move is valid
     */
    getValidity(x, y, pieceList){
        //TODO: has to check for the enPassant Conditions
    }
}
/**
 * This class is an extension of the move class. It is an instance of pawnDoubleMove and it also has an modified getValidity() method
 */
class pawnDoubleMove extends Move {
    constructor(){
        super(0,2,false);
    }
    /**
     * Checks whether or not an double pawn move is possible in the given circumstances
     * @param {int} pieceList the list of pieces on the board
     * @param {int} index the relevant move's pieces
     * @returns A boolean referring to whether or not the proposed move is valid
     */
    getValidity(x, y, pieceList){
        //TODO: has to check for the pawn Double Move Conditions
    }
}
/**
 * This class is an extension of the move class. It is an instance of pawnSingleMove and it also has an modified getValidity() method
 */
class pawnSingleMove extends Move {
    constructor(){
        super(0,1,false);
    }
    /**
     * Checks whether or not an double pawn move is possible in the given circumstances
     * @param {int} pieceList the list of pieces on the board
     * @param {int} index the relevant move's pieces
     * @returns A boolean referring to whether or not the proposed move is valid
     */
    getValidity(x, y, pieceList){
        //TODO: has to check for the pawn Single Move Conditions
    }
}

/**
 * This class is an extension of the move class. It is an instance of castling and it also has an modified getValidity() method
 * Note that castling is a move that only Kings can make
 */
class castling extends Move {
    constructor(dx, dy, repeated){
        super(dx,dy,repeated);
    }
    /**
     * Checks whether or not an double pawn move is possible in the given circumstances
     * @param {int} pieceList the list of pieces on the board
     * @param {int} index the relevant move's pieces
     * @returns A boolean referring to whether or not the proposed move is valid
     */
    getValidity(x, y, pieceList){
        //TODO: has to check for the castling Conditions
    }
}


/**
 * A Pawn. An extension of the Piece class
 */
class Pawn extends Piece {
    /**
     * @param {int} x index of the piece's i location; The index of the first tile the piece occupies
     * @param {int} y index of the piece's j location; The index of the first tile the piece occupies
     * @param {Team} team the team of the piece using the team object. Team.white and Team.black are the common teams
     */
    constructor(x, y, team){

        this.pawnMoveList = [
            new pawnSingleMove(), new pawnDoubleMove(), new enPassant(-1), new enPassant(1)
        ];

        super(x,y,1,1,team,pawnMoveList);
    }
}
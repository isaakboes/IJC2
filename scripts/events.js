/**
 * This file stores the event declarations and methods to execute the events
 */


/**
 * The Event class is used for storing and executing events. Different events can extend the Event class and replace the declaration of runEvent();
 * @param {string} eventName The display name of the event
 * @param {string} eventDescription The description to the user about what the event does
 */
class Event{
    constructor(eventName,eventDescription){
        this.name = eventName;
        this.description = eventDescription;
    }
    runEvent(){
    }
    //TODO: WRITE THE EVENT DISPLAY AND RENDER METHOD
    /**
     * Renders the event to the player at a specified location and scale.
     * 
     * @param {int} x Event render X position
     * @param {int} y Event render Y position
     * @param {int} size Event render size
     */
    render(x, y, size){

    }
    /**
     * Renders the event to the player as is done each turn. Uses the Event.render() method.
     */
    display(){

    }
}
var hi = new Event("hi","ho");

/**
 * For turns in which no event will be played, a null event take the place in the event array
 * This event does nothing and isn't shown to the players.
 * Event.render(a,b,c) will still render a version of this card for debugging reasons
 * Event.display() will do nothing for null events.
 */
class nullEvent extends Event{
    constructor(){
        super("Null Event","This does nothing!");
    }
    display(){
        return;
    }
}


/**
 * This event is the first in every game
 */
class startCards extends Event{
    constructor(){
        super("Cards!","Now you can draw a card on each of your turns before you play.");
    }

    runEvent(){
        //cardsEnabled = true;
    }
}

//TODO: Add the image storing and rendering code for image events/

/**
 * This is an event that adds an aesthetic element to the game screen like the tile banner
 */
class visualEvent extends Event{
    /** 
     * @param {String} name Event Name
     * @param {String} description Event description
     * @param {ToBeDetermined} image Image to display
     */
    constructor(name,description,image){
        super(name,description);
        this.image = image;
    }
    /**
     * Adds the relevant image to the list of images to render on the main screen
     */
    runEvent(){
        //TODO: Make the visual event runEvent
        //TODO: Maybe it adds it's image (or image to be rendered object) to list of them to be rendered
    }
}

/**
 * This event gives a piece to the active team. 
 */
class givePieceEvent extends Event {
    /**
     * @param {String} name The card name
     * @param {String} description The card description
     * @param {Piece} piece The piece to give
     * @param {int} quantity Quantity of the piece to give
     * @param {Boolean} activeTeam Whether or not the pieces should be given to the active team or not
     */
    constructor(name,description, piece, quantity = 1, forActiveTeam = true){
        super(name, description)
        this.piece = piece;
        this.quantity = quantity;
        this.forActiveTeam = forActiveTeam;
    }

    runEvent(){
        //Finds open piece tile indices
        var unoccupiedTileLocations = [];

        //Sets the pieceTeam variable
        var pieceTeam;
        if(activeTeam == Team.white){
            pieceTeam = this.forActiveTeam ? Team.white : Team.black;
        }else if(activeTeam == Team.black){
            pieceTeam = this.forActiveTeam ? Team.black : Team.white;
        }else{
            console.log("SOMETHING BAD HAPPENED");
        }

        //If the player receiving the pieces is the white team, they can't be placed closer than the third rank
        const yStartPosition = (pieceTeam==Team.white) ? 2 : 0
        //If the player receiving the pieces is the black team they can't be placed lower than the 6th rank
        const yEndPosition = (pieceTeam==Team.black) ? tiles[i].length()-2 : tiles[i].length();

        for(var i = 0; i<tiles.length(); i++){
            for(var j = yStartPosition; j<yEndPosition; j++){
                if(tiles[i][j].givePieceTeam() == null) unoccupiedTileLocations.add([i,j]);
            }
        }

        for(var repetitions = 0; repetitions<this.quantity; repetitions++){
            
            //The random index of the location to select.
            const randomTileIndex = (unoccupiedTileLocations.length())*Math.random()
            //Creates a piece
            var pieceToAdd = this.piece;
            //Sets the piece's location to the chosen unoccupied tile
            pieceToAdd.setX(unoccupiedTileLocations[randomTileIndex][0]);
            pieceToAdd.setX(unoccupiedTileLocations[randomTileIndex][1]);
            pieceToAdd.setTeam(pieceTeam);
            //Adds the piece to the gameBoard's list of pieces
            gameBoard.pieces.add(pieceToAdd);

            //Removes the previously unoccupied location from the list.
            unoccupiedTileLocations.remove(randomTileIndex);
        }
    }

}
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

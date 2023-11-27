/**
 * This file stores the declarations for individual events to be added to the events array
 */


/**
 * This is the global list of events in the order they will be played in. 
 */
var events = [];


function addNullEvents(count){
    for(var i = 0; i<count; i++){
        events.add(new nullEvent());
    }
}


/**
 * This is the list of events that can be pulled from to add to the events array.
 */
var eventsList = [];












addNullEvents(6); // Adds the initial nullEvents events to the events list. This makes sure no events happen on the first few turns.
events.add(new startCards()); // Starts the card system
addNullEvents(Math.random()*4+1); // Waits a bit longer
events.add(new visualEvent("Decoration","",null/* //TODO: IMAGE FOR THIS! */)); //Adds the IJC title bar to the screen

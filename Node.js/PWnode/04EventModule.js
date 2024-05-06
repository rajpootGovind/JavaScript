const EventEmitter= require("node:events");
/*calling EventEmitter is more appropriate in place of events, bcz events module returns a class EventEmitter
which have a encapsulated fuctionality to emits an events an response to events. 
*/
const emitter = new EventEmitter();


//02.for this event we have to need a event listener-
emitter.on("order-pizza", (size,topping)=>{
    console.log(`ordered-pizza! Baking a ${size} pizza with topping ${topping}`);
})
//03. we can add mutiple listener for one event
emitter.on("order-pizza",(size)=>{
    if(size==="large"){
        console.log("offer a complementry drink")
    }
})

console.log("for cheacking the non-blocking manner")

//01.emit the event(custom event)-
emitter.emit("order-pizza","large","corn");

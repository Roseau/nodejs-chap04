var events = require('events');
var util = require('util');
//define the Pulser Object

function Pulser(){
    events.EventEmitter.call(this);
}
//inheritance from EventEmitter
util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function(){
    //menjalankan dengan jeda waktu yang fix
    setInterval(()=>{
        util.log('>>>> pulse');
        //sending pulse events to any listeners
        this.emit('pulse');
        util.log('<<<< pulse');
    },1000);
};
//initiate a pulser Object
var pulser = new Pulser();
//Handler function
//catching the "pulse" that has been emitted by this.emit, and write pulse received
pulser.on('pulse', () => {
    util.log('pulse received');
});
//Start it pulsing
pulser.start();
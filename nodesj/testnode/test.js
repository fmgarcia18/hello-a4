var EventEmitter = require('events').EventEmitter;
var Counter = function(init){
	this.increment = function(){
		init++;
		this.emit('incremented', init);
	}
}

Counter.prototype = new EventEmitter();

var counter = new Counter(10);
var callback = function(count){
	console.log(count);
}

counter.addListener('incremented', callback);

counter.increment();
counter.increment();

var Readable = require('stream').Readable;
var readable = new Readable;
var count = 0;

readable._read = function(){
	if(++count > 10){
		return readable.push(null);
	}
	setTimeout(function(){
		readable.push(count + "\n");
	}, 1500);
};

readable.pipe(process.stdout);
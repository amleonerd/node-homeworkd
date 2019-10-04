function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(type, callback) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(callback);
};

EventEmitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(func) {
      func();
    });
  }
};

var e = new EventEmitter();


e.on("entry", function() {
  console.log("hello");
});


e.emit("entry");

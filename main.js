var fs = require("fs");
var buf = new Buffer(1024);
//"Doing the thing will log in console.log"
console.log("Doing the thing");
// "r+" opens the file for reading and writing, err - error, fd- file descriptor
fs.open("input.txt", "r+", function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("Yay we did it!");
  console.log("Reading the file.");
// buf- what the data is written to, length the interger specifying the number of bytes to read. 
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if (err) {
      console.log(err);
    }
    console.log(bytes + " bytes read");

    // Print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});

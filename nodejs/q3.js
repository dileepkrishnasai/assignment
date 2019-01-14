let http=require("http");
let request = require("request");
let fs= require("fs");
let events=require("events");
let emitter=new events();

emitter.on('hi',function(){
 console.log("emitted");
})

request('http://www.google.com',function(err,data){
 if(err)
  throw err;
  emitter.emit('hi');
}).pipe(fs.createWriteStream('q3.html'));

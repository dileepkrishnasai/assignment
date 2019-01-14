
let fs=require("fs");
let parse=require("xml2js");
let util=require("util");
let ps=new parse.Parser();

let file='q1';

class xmlf
{ 
  fun1(file)
  {
   let p=fs.readFileSync('./'+file+'.xml','utf8',function(err,data){
    if(err)
    {
     throw err;
    }
   });
  var result = ps.parseString(p,function(err,data){
  console.log(data);
  });
  }
}
let XmlParser=new xmlf();
XmlParser.fun1(file);

/*
the jsdom library is used for the access of the data from the html file 
*/
let parser=require("minimist");
let fs=require("fs");
let axios=require("axios");
let jsdom= require("jsdom");
let args=parser(process.argv);
let dwnlp=axios.get(args.source);
dwnlp.then(function(responce){
   let html=responce.data;
   let dom=new jsdom.JSDOM(html);
   let document=dom.window.document;
   console.log(document.title);
})

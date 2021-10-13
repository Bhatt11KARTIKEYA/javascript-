// node axiosfile.js --source="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415" 
let parser=require("minimist");
let fs=require("fs");
let axios=require("axios");
let args=parser(process.argv);
let dwnlp=axios.get(args.source);
dwnlp.then(function(responce){
   let html=responce.data;
   console.log(html);
})
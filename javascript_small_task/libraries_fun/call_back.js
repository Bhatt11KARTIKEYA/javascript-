let parser=require("minimist");
let fs=require("fs");
let args=parser(process.argv);
let t1=Date.now();
fs.readFile(args.source,function(err,responce){
  if(err==null)
  {
      fs.writeFileSync(args.dest,responce,"utf-8");
  }
 
 let t2=Date.now();
 console.log("the time taken in reading and writting a file is "+(t2-t1));

});

let t3=Date.now();
for(let i=0;i<args.n;i++)
{
    console.log(i);
}
 let t4=Date.now();
 console.log("the time taken print the number is "+(t4-t3));
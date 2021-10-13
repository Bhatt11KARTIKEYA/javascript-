let parser=require("minimist");
let fs=require("fs");
let args=parser(process.argv);
let stext=fs.readFileSync(args.source,"utf-8");
fs.writeFileSync(args.dest,stext,"utf-8");
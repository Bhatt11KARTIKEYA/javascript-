let a=[]; //declaration of the array
let args=process.argv;
let n=parseInt(args[2]); 
for(let i=0;i<=n;i++)
{
    //a[i]=i;
    //OR
    a.push(i);
}
console.log(a);
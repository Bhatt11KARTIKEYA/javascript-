// for loop
let n=process.argv;
let a=parseInt(n[2]);

for(let i=a;i>0;i--)
{
    console.log(i);
}
// while loop
console.log("******------*****---------");
i=a;
while(i!=0)
{
    console.log(i);
    i--;
}
console.log("*****--------****---------");
// do while
i=a;
do
{
 console.log(i);
 i--;
}while(i!=0);
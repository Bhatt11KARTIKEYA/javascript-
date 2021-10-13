// to find wether the number is prime or not
function PrimeCheck(n)
{
    for(let i=2;i*i<n;i++)
    {
      if(n%i==0)
      {
        return(false);
      }
    }
    return (true);
}
let args=process.argv;
let a=parseInt(args[2]);
if(PrimeCheck(a)==true)
{
    console.log("IT IS A PRIME NUMBER ");
}
else
{
 console.log("IT IS NOT A PRIME NUMBER ");
}
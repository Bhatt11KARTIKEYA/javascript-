/*
the ural for this code is :-
https://www.espncricinfo.com/series/icc-cricket-wonfo.com/series/icc-cricket-world-cup-2019-1144415/match-results
*/
let parser=require("minimist");
let fs=require("fs");
let axios=require("axios");
let jsdom=require("jsdom");


let args=parser(process.argv);
let dwnpro=axios.get(args.source);
dwnpro.then(function(responce){
    let html=responce.data;
    let dom=new jsdom.JSDOM(html);
    let document=dom.window.document;
   let matches=[];
   
   
   let teams=document.querySelectorAll("div.match-score-block");
   for(let i=0;i<teams.length;i++)
   {
    let match={
      t1:"",
      t2:"",
      t1s:"",
      t2s:"",
      result:""
  }
       // THE NAME OF BOTH THE TEAM 
       let teamsName=teams[i].querySelectorAll("p.name");
       match.t1=teamsName[0].textContent;
       match.t2=teamsName[1].textContent;
       // THE SCORE OF BOTH THE TEAM 
      let ScoreOfTeams=teams[i].querySelectorAll("div.score-detail > span.score");
     if(ScoreOfTeams.length==2)
     {
       match.t1s=ScoreOfTeams[0].textContent;
       match.t2s=ScoreOfTeams[1].textContent;
     }
     else if(ScoreOfTeams.length==1)
     {
        match.t1s=ScoreOfTeams[0].textContent;
       match.t2s="";
     }
     else if(ScoreOfTeams.length==0) 
     {
        match.t1s="";
       match.t2s="";
     }
     // THE RESULT OF TEAM 
     let res=teams[i].querySelector("div.status-text > span");
     match.result=res.textContent;
       
     //push value in match array 
     matches.push(match);
   }
  
 let output=JSON.stringify(matches);
 fs.writeFileSync(args.dest,output,"utf-8");
  
 // Task 1
 let newTeam=[];
 for(let i=0;i<matches.length;i++)
 {
   PushIfNotPresent(newTeam,matches[i].t1);
   PushIfNotPresent(newTeam,matches[i].t2);
 }
 output=JSON.stringify(newTeam);
 fs.writeFileSync(args.dest,output,"utf-8");
  //Task 2


for(let i=0;i<matches.length;i++)
{
   FilleTheMatchesArray(newTeam,matches[i].t1,matches[i].t2,matches[i].t1s,matches[i].t2s,matches[i].result);
   FilleTheMatchesArray(newTeam,matches[i].t2,matches[i].t1,matches[i].t2s,matches[i].t1s,matches[i].result);
}
output=JSON.stringify(newTeam);
fs.writeFileSync(args.dest1,output,"utf-8");

}).catch(function(err){
    console.log(err);
})
function PushIfNotPresent(newTeam,matchName)
{
  let flag=-1;

 for(let j=0;j<newTeam.length;j++)
 {
   if(newTeam[j].name==matchName)
   {
     flag=j;
     break;
   }
 }
 if(flag==-1)
 {
    let team={
      name:matchName,
      match:[]
    }
    newTeam.push(team);
 }
 
}

function FilleTheMatchesArray(newTeam,homeTeam,vsTeam,homeScore,vsScore,result)
{
  // console.log("hi");
//  console.log(vsTeam);

 let flag = -1;
  for(let j=0;j<newTeam.length;j++)
  {
    // console.log(newTeam[j]);
    if(newTeam[j].name==homeTeam)
    {
      flag=j;
      break;
    }
  }
  let team=newTeam[flag];
  team.match.push({
    opponent:vsTeam,
    homescore:homeScore,
    vsscore:vsScore,
   result:result,

  })
  console.log(team.match);
}

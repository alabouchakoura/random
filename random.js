//initilisation
const min=document.getElementById("min");
const max=document.getElementById("max");
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const res=document.getElementById("result");
//functions
function erase(){
min.value="";
max.value="";
res.value="";
}
function result(){
    if(min.value=="" || max.value==""){
     res.value="Provide range";
    }
    else{
       let min_value=Number(min.value);
       let max_value=Number(max.value);
     if(max_value<min_value){
       res.value="Incorrect range";
     }
     else{
          let number=Math.floor(Math.random()*(max_value-min_value+ 1))+min_value;
res.value=number;
}
     }
    }
button1.onclick=result;
button2.onclick=erase;
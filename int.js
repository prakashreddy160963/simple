var int;
var p;
var r;
var t;
var amt;

function caluInterest(){

p=document.getElementById("txt1").valueAsNumber;

r=document.getElementById("txt2").valueAsNumber;

t=document.getElementById("txt3").valueAsNumber;

int=p*t*r/100;

document.getElementById('result').value=int;

console.log("interest is: "+int);
}

function caluAmount(){

   // p=document.getElementById("principle").value;

    amt=int+p;

    document.getElementById('result').value=amt;

 console.log("amount is: "+amt);
}
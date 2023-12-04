var arr=[];
var clutter="";
var num="";
function makebubble(){
for(var i=1;i<=160;i++){
	 num=Math.floor(Math.random()*10);
	clutter +=`<div id="bubble">${num}</div>`;
}
}

var btm=document.getElementById('panelBottom');
btm.innerHTML=clutter;




var score=0;
function increasescore(){
	score += 10;
	document.getElementById('score').innerHTML=score;
}

var timer=60;
var startt='<button id="startbtn">START</button>';
function runtime(){
   var timrerstart=	setInterval(function(){
		if(timer>0){
       timer--;
   }else{
   	document.getElementById('panelBottom').innerHTML=`
	
	<h1 id="run">GAME OVER</h1>
	<h2>Your Score is</h2>
	<h2>${score}</h2>`;
	 arr.push(score)
	 document.getElementById('startbtn').style.visibility="visible"
	  document.getElementById('startbtn').textContent="TRY AGIAN"
	  

	  
	
   	clearInterval(timrerstart);
   }
   document.getElementById('boxtimer').innerHTML=timer;
	},1000)
}
// runtime();
var hitnum=0;
function hitload() {
	 hitnum=Math.floor(Math.random()*10);
	document.getElementById('hit').innerHTML=hitnum;
}
hitload();




 var hid=document.getElementById('hide')
// document.getElementById('gamebtn').addEventListener('click',function(){
// 	hid.Style.Visivility="hidden";
// 	makebubble();
// 	runtime();
// 	hitload();
// 	alert("hyyy")
// });


document.getElementById('startbtn').addEventListener('click',function(){	
		
	makebubble();
	var btm=document.getElementById('panelBottom');
btm.innerHTML=clutter;
    timer=20;
	runtime();
	
	hitload();
	document.getElementById('startbtn').style.visibility="hidden"
	document.getElementById('score').innerHTML=score=0;
	

	
});
	
document.getElementById('panelBottom').addEventListener('click',function(dets){
	var clickednum=Number(dets.target.textContent);
	if(clickednum === hitnum){
		makebubble();
		increasescore();
		hitload();
		
		
	}
})
console.log(Math.floor(Math.random()*10))
	











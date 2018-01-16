window.onload=function(){
	statueBar();
	init();
	show();
}  
	var advInitTop=0;

	function init(){
  	document.getElementById("pairflag").className='show'; 
    window.onscroll = move;	
  	}  	
  window.setTimeout("init()",600);
    	
  function move(){
		document.getElementById("pairflag").style.top = (document.documentElement.scrollTop + 200)+'px';
  	}
  
  function leftClose(){
  	document.getElementById("closeLeft").style.visibility = "hidden";
  	document.getElementById("advLeft").style.visibility = "hidden";
  	}
  function rightClose(){
  	document.getElementById("closeRight").style.visibility = "hidden";
  	document.getElementById("advRight").style.visibility = "hidden";
  	}  	
  	
  
  var nowFrame = 1;
	var maxFrame = 4;
	function show(curDiv) {
	if(Number(curDiv)){
	  clearTimeout(theTimer);  //当触动按扭时，清除计时器
	  nowFrame = curDiv;                //设当前显示图片
	  }
  for(var i=1;i<=maxFrame;i++){
		document.getElementById('div'+i).style.display =(i==nowFrame)?'block':'none';   //当前图片显示
		}
  if(nowFrame == maxFrame){   //设置下一个显示的图片
    nowFrame = 1;
    }
  else{
	  nowFrame++;
	  }
	theTimer = setTimeout('show()', 3000);   //设置定时器，显示下一张图片
	}
  function statueBar(){
		window.status= "欢迎来到贵美商城的世界！如果喜欢本站请推荐给朋友。";
	}
	function switchMe(){
		nTab=arguments[0];
		document.getElementById('tabbody').style.display=((nTab==1)?"none":"block");
		document.getElementById('tab').className=((nTab==1)?"":"over");
	}

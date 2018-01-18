	function chinaCharactor(thisStr){
		var pattern=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/;
		if (!pattern.test(thisStr)){
			return false;
			}
		else {
			return true;
			}
		}

	function patternCheck(thisPattern){
		strTest = arguments[1];
		if (!thisPattern.test(strTest)){
			return false;
			}
		else {
			return true;
			}
		}		
var errMsg=['名字必须汉字',
            '姓氏必须汉字',
            '登录名无效！',
            '密码必须多于或等于 6 个字符。',
            '验证密码与原密码不一致！',
            'Email地址不合法！',
            '生日无效',
            ];
            
            //[\u4E00-\u9FA5]|[\uFE30-\uFFA0]     \x00-\xff
var pattern=[/^([\u4E00-\u9FA5]){1,}$/, 
            /^([\u4E00-\u9FA5]){1,}$/, 
            /^[a-zA-Z0-9_]{3,}$/,
            /.{6,}/,
            '',
            /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]{2,}(\.[a-z0-9]{2,5}){1,2}$/,
            /^[0-9]$|^[0-2][0-9]$|^3[0-1]$/
            ];

function showMsg(strName){
	strText = arguments[1];
	strName.parentNode.getElementsByTagName("span")[0].innerHTML='';
	strName.parentNode.getElementsByTagName("span")[0].innerHTML+=strText;
	}

function clearMsg(strId){
	strId.parentNode.getElementsByTagName("span")[0].innerHTML='';
	}

function regCheck(oThis){
	  nType=arguments[1];
	  if (nType==4) {
	  	strCon = !(document.getElementsByName('pass')[0].value==document.getElementsByName('rpass')[0].value);
	  	}
	  else {
	  	strCon = !patternCheck(pattern[nType],oThis.value);
	  	}
		if ( strCon ){
			showMsg(oThis,errMsg[nType]);
			return false;
			}
		else {
			clearMsg(oThis);
			return true;
			}	
		}		

function validateform(){
	var	oSpan   = document.getElementsByTagName("span");
	var bIsTrue = true;
	for (var i=0;i<oSpan.length;i++){
		//alert(oSpan[i]);]
	  if(bIsTrue==false){ 
	 	alert('输入有错，请重新检查');
	 	oSpan[i-1].parentNode.getElementsByTagName("input")[0].focus();
	  return false;	
	  }
	  oInput = oSpan[i].parentNode.getElementsByTagName("input");
		bIsTrue=regCheck(oInput[oInput.length-1],i)&&bIsTrue;
		}
	if (bIsTrue==true) {
	  return true;
	}
}		

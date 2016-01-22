// JavaScript Document
var flag;
function formVal(){
	flag= true;
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var cpassword=document.getElementById('cpassword').value;
	var email=document.getElementById('email').value;
	var sex0=document.form1.sex[0].checked; // returm true or false
	var sex1=document.form1.sex[1].checked;
	var day=document.getElementById('day').value;
	var month=document.getElementById('month').value;
	var year=document.getElementById('year').value;
	
	if(username=="" || !isNaN(username)){
		//no numbers at start
		flag=false;
		document.getElementById('usernameo2').innerHTML="fill please no numbers included";
		document.getElementById('usernameo1').innerHTML="*";	
	}else{
		document.getElementById('usernameo2').innerHTML="";	
		document.getElementById('usernameo1').innerHTML="";	
	}
	
	/*-------------------------------------------------------
	var regular = /^[a-zA-Z]/;
	if(regular.test(password) && password.length>=10){
		document.getElementById('password2').innerHTML="";	
		document.getElementById('password1').innerHTML="";
	}
	else{
		document.getElementById('password2').innerHTML="must include letter and your password must be at least 10 characters";	
		document.getElementById('password1').innerHTML="*";	
		flag=false;
	}
	
	
	var regular = /[0-9]/;
	if(regular.test(password) && password.length>=10){
		document.getElementById('password2').innerHTML="";	
		document.getElementById('password1').innerHTML="";
	}
	else{
		document.getElementById('password2').innerHTML="must include number and your password must be at least 10 characters";	
		document.getElementById('password1').innerHTML="*";	
		flag=false;
	}
	*/
	//--------------------------------------------
	
	var regular1 = /^[a-zA-Z]/;
	var regular2 = /[0-9]/;

if(regular1.test(password) )
{
	if(regular2.test(password))
	{
		if(password.length>=10)
		{		
			document.getElementById('password2').innerHTML="";	
			document.getElementById('password1').innerHTML="";
			document.getElementById('color').style.backgroundColor="lime";

		}
		else{
			document.getElementById('color').style.backgroundColor="yellow";		
			document.getElementById('password2').innerHTML="at least 10 letters and numbers";	
			document.getElementById('password1').innerHTML="*";	
			flag=false;
			}


	}
	else{
		if(password.length>=10)
		{	
			document.getElementById('color').style.backgroundColor="yellow";		
			document.getElementById('password2').innerHTML="at least 1 number";	
			document.getElementById('password1').innerHTML="*";
			flag=false;

		}
		else
		{	
			document.getElementById('color').style.backgroundColor="red";		
			document.getElementById('password2').innerHTML="at least 10 letters and numbers";	
			document.getElementById('password1').innerHTML="*";
			flag=false;

		}
	}
}
else{
		if(regular1.test(password))
	{
		if(password.length>=10)
		{		
			document.getElementById('password2').innerHTML="";	
			document.getElementById('password1').innerHTML="";
			document.getElementById('color').style.backgroundColor="lime";

		}
		else{
			document.getElementById('color').style.backgroundColor="yellow";	
			document.getElementById('password2').innerHTML="at least 10 letters and numbers";	
			document.getElementById('password1').innerHTML="*";	
			flag=false;
			}


	}
	else{
		if(password.length>=10)
		{		
			document.getElementById('color').style.backgroundColor="yellow";
			document.getElementById('password2').innerHTML="at least 1 letter";	
			document.getElementById('password1').innerHTML="*";
			flag=false;

		}
		else
		{		
			document.getElementById('color').style.backgroundColor="red";
			document.getElementById('password2').innerHTML="at least 10 letters and numbers";	
			document.getElementById('password1').innerHTML="*";
			flag=false;

		}
	}

}
	//------------------------------------------------
	if(cpassword!=password){
		flag=false;
		document.getElementById('cpassword2').innerHTML="not matching";
		document.getElementById('cpassword1').innerHTML="*";	
	}
	else{
		document.getElementById('cpassword2').innerHTML="";	
		document.getElementById('cpassword1').innerHTML="";	
	}
	//-------------------------------------------------
	var reg =/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	if (reg.test(email)) {
	document.getElementById('emailo2').innerHTML="";	
	document.getElementById('emailo1').innerHTML="";	
	}else {
		document.getElementById('emailo2').innerHTML="invalid email address";
		document.getElementById('emailo1').innerHTML="*";	
		flag=false;
		  }
	//------------------------------------------------
	if(sex0 || sex1 ){
		document.getElementById('sexo2').innerHTML="";
		document.getElementById('sexo1').innerHTML="";
	}else{
		document.getElementById('sexo2').innerHTML="Please select";
		document.getElementById('sexo1').innerHTML="*";
		flag=false;
		}
	 //----------------------------------------------
	if(day=="" || isNaN(day)){
		flag=false;
		document.getElementById('birthdayo2').innerHTML="fill please only numbers please";
		document.getElementById('birthdayo1').innerHTML="*";	
	}else{
		document.getElementById('birthdayo2').innerHTML="";	
		document.getElementById('birthdayo1').innerHTML="";	
	}
	if(month=="" || isNaN(month)){
		flag=false;
		document.getElementById('birthdayo2').innerHTML="fill please only numbers please";
		document.getElementById('birthdayo1').innerHTML="*";	
	}else{
		document.getElementById('birthdayo2').innerHTML="";	
		document.getElementById('birthdayo1').innerHTML="";	
		//alert(month);
	}
	if(year=="" || isNaN(year) || year<1914 ||year>1996){
		flag=false;
		if(year<1914 ||year>1996)
		{
			document.getElementById('birthdayo2').innerHTML="invalid age";
			}
		else{
		document.getElementById('birthdayo2').innerHTML="fill please only numbers";
		document.getElementById('birthdayo1').innerHTML="*";	
		}
		
	}else{
		document.getElementById('birthdayo2').innerHTML="";	
		document.getElementById('birthdayo1').innerHTML="";
	    //alert(year);	
	}
	
	
	return flag;
}

/*	var reg =/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	if (reg.test(email)) {
	document.getElementById("td7").innerHTML="";
	}else {
		document.getElementById("td7").innerHTML="<p style='color:red';>*Please provide a valid email address</p>";
		flag=false;
		  }
	*/
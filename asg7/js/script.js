function openLoginForm() {
  document.getElementById("myLoginForm").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("myLoginForm").style.display = "none";
}

function openRegForm() {
  document.getElementById("myRegForm").style.display = "block";
}

function closeRegForm() {
  document.getElementById("myRegForm").style.display = "none";
}

function checkMatch(){
  pw1 = document.getElementById("regPsw");
  pw2 = document.getElementById("regPsw2");

  if(pw1 != pw2){
    alert("Passwords must match!!");
  }
}


function display(){
var obj = document.querySelector('#shopping');
// var obj= document.forms[0];
// var form = document.querySeslector('form');
obj.addEventListener("submit", function(e)
{


var len = obj.elements.length;
console.log(obj.elements);

var text = "";

for(var i=0; i < 10; i++)
{
  if(obj.elements[i].value != 0){
    text += obj.elements[i].name;
    text += ":";
    text += obj.elements[i].value;
  }
}

for (var i=10; i < len -2; i++)
{

if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
{

	alert("Make sure to input " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	// to stop form from submitting to new page
	 e.preventDefault();
	return;
}
else if ((i == 12 ) && (obj.elements[i].value.length != 5)  )
{

	alert("Make sure to input 5 digits for " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	// to stop form from submitting to new page
	 e.preventDefault();
	return;
}

else if ((i == 13 ) && (obj.elements[i].value.indexOf("@") == -1)  )
{

	alert("Your email should inlcude an @ " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	// to stop form from submitting to new page
	 e.preventDefault();
	return;
}

else if ((i == 13 ) && (obj.elements[i].value.indexOf(".") == -1)  )
{

	alert("Your email should include an . " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	// to stop form from submitting to new page
	 e.preventDefault();
	return;
}

else if (i == 14 && obj.elements[i].value.length != 16) // in case no value
{

alert("You must enter a 16 digit credit card number " );

obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	// to stop form from submitting to new page
	 e.preventDefault();
	return;
}
else 
{

text += obj.elements[i].name;
text += ":";
text += obj.elements[i].value;

text += "<p>";
}

}

document.getElementById("demo").innerHTML= text;
console.log(text);

});
}

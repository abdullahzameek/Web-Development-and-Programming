
var shipFee = 0;
function display()
{

    var obj = document.forms[0]; 
    var len = obj.elements.length;
    var output = "Thank you for shopping! Here's your order:";
    for (var index=0; index < len -2    ; index ++)

    {
    var el = obj.elements[index];

//unknown form element creeps in 
if(el.value == undefined){
    continue
}

else if (el.value == "" || el.value== null) // in case no value
{

alert("You must enter a value for " + el.name);

el.focus();
el.select();
el.style.backgroundColor="#F00";

return;

}

if(el.value == "Ship"){
    shipFee = 15
}

if (index == 2 && el.value.length != 5) // in case no value
{

alert("You must enter a 5 digit zip code " );

el.focus();
el.select();
el.style.backgroundColor="#F00";

return;

}

if (index == 3 && el.value.indexOf("@") == -1) // if no @
{

alert("You must include an @ in your email " );

el.focus();
el.select();
el.style.backgroundColor="#F00";

return;

}
if (index == 3 && el.value.indexOf(".") == -1) // if no @
{

alert("You must include an . in your email " );

el.focus();
el.select();
el.style.backgroundColor="#F00";

return;

}

if (index == 4 && el.value.length != 16) // in case no value
{

alert("You must enter a 16 digit credit card number " );

el.focus();
el.select();
el.style.backgroundColor="#F00";

return;
}

if(index == 4){
credValue = el.value.toString();
credValue = credValue.slice(credValue.length-4)
console.log(credValue);
output += "<p>" + el.name + " :" + "xxxxxxxxxxxx"+credValue;  
}
else{
    output += "<p>" + el.name + " :" + el.value;
}

}

// output += "<p>" + "T Shirt" + " :" + document.getElementById("tShirtName").innerHTML;

document.getElementById("output").innerHTML = output;
var finalTotal = 0;
finalTotal = tShirtTotal+hoodieTotal+shipFee;
document.getElementById("grandTotal").innerHTML = "<p><strong> The final total is : $" +finalTotal.toString();

var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

document.getElementById("date").innerHTML = "<p>" +datetime;
}


// FUNCTIONS TO CALCULATE TOTAL 

var tShirtTotal = 0;
var hoodieTotal = 0; 


var tshirtQt = document.getElementById("tshirtQuantity")
tshirtQt.addEventListener("change",tShirtSub)

function tShirtSub(){
    var price = 35

    var tQt = parseFloat(tshirtQt.value);
    console.log(tQt);
    tShirtTotal = tQt * parseFloat(price);

    document.getElementById("tshirtResult").innerHTML = "The subtotal is: " + tShirtTotal;
    return tShirtTotal;
}

var hoodieQt = document.getElementById("hoodieQuantity")
hoodieQt.addEventListener("change",hoodieSub)

function hoodieSub(){
    var price = 50

    var hQt = parseFloat(hoodieQt.value);
    hoodieTotal = hQt * parseFloat(price);

    document.getElementById("hoodieResult").innerHTML = "The subtotal is: " + hoodieTotal;
    return hoodieTotal;
}

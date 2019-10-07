function styleApplication(){
    body = document.getElementById("body");
    h1 = document.getElementById("h1Style")
    body.style.backgroundColor = "#000000";
    h1.style.color = "#FFFFFF";
    h1.style.fontSize = "42px";
    h1.style.fontFamily = "'Roboto Mono', monospace";
    h1.style.border = "thick dotted #FFFFFF";
    h1.style.padding = "20px 10px 10px 20px";
};

function undoStyle(){
    body = document.getElementById("body");
    h1 = document.getElementById("h1Style")
    body.style.backgroundColor = "#FFFFFF";
    h1.style.color = "#000000";
    h1.style.fontSize = "36px";
    h1.style.fontFamily = "'Be Vietnam', monospace";
    h1.style.border = "thick solid #000000";
    h1.style.padding = "none";
};

prizelist = ["Netflix", "Spotify", "Amazon Prime", "Apple Music", "PlayStation Network"];

function pickFive(){
   list = document.getElementById("list");
   for(let i =0; i<prizelist.length; i++){
        list.innerHTML += prizelist[i]+" | ";
   }
};

function pickWinner(){ 
    winner = document.getElementById("win")
    winningIndex = Math.floor(Math.random() * prizelist.length);
    console.log(winningIndex);
    winner.innerHTML = "You won a " + prizelist[winningIndex] + " coupon!";
};

function swapText(){
    p1 = document.getElementById("text1");
    p2 = document.getElementById("text2");

    temp = p1.innerHTML;
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = temp;
}

function swapImage(){
    i1 = document.getElementById("img1");
    i2 = document.getElementById("img2");

    temp = i1.src;
    console.log(temp)
    i1.src = i2.src;
    i2.src = temp;
}


function newDoc(){
     document.open();
     document.title = "Output Image";
     document.write("<html><head><title> output </title> <link rel='stylesheet' href='css/style.css' type='text/css'></head><body >");
     document.write("<center><h1>This is a puppy!</h1><center><br><center><img id=\"img3\"src=\"img/dog1.jpg\"></center>");
     img = document.getElementById("img3");
     document.write("<br>The height of the image is  "+img.height + " and the width is "+ img.width);
     var date = new Date();
     var day = String(date.getDate()).padStart(2, '0');
     var month = String(date.getMonth() + 1).padStart(2, '0');
     var year = date.getFullYear();
     var weekday  = date.getDay();
     weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saturday'];
     document.write("<br>Today is "+day+"/"+month+"/"+year+ " and today is "+weekdays[weekday]);
     document.write("</body></html>");
     document.close();
    
}

function convert(){
    x = document.getElementById("input").value * 9 / 5 + 32;
    document.getElementById("output").value = x;
    document.getElementById("output").style.color = "#FF0000";
}
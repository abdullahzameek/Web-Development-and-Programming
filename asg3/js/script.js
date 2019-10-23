
// Part 1 

var images = []
for(var i =1; i<21; i++){
    images.push(i.toString()+".jpg");
}


function displayRandomImage(){
    var img = document.getElementById("randImage");
    img.src = "imgs/" + images[Math.floor((Math.random() * 20) + 1)].toString();
}


// Part 2 

var slideIndex = 0; 
var stop = true;
function slideShow() {
  var x = document.getElementById("slideImage");
  if(stop == false){
    slideIndex++;
    if(slideIndex == images.length) {slideIndex =1}
    x.src = "imgs/"+images[slideIndex].toString();
    setTimeout(slideShow, 2000); // Change image every 2 seconds
  }

  else if (stop == true)
  {
    console.log("time to stop"); 
    x.src = "imgs/"+images[slideIndex].toString();
  }
}

function startSlideShow(){
    if(stop == false){
      stop = true
      document.getElementById("button1").innerHTML = "Start!"
    }
    else{
      stop = false
      document.getElementById("button1").innerHTML = "Stop!"
    }
    slideShow();
}

function stopSlideShow(){
   stop = true
   slideShow();
}

// Part 3

var die = []
for(var i =1; i<7; i++){
    die.push(i.toString()+".gif");
}

function rollDie(){
  dieSum = document.getElementById("diesum").value
  if (dieSum < 1 || dieSum > 12){
    alert("Value has to be between 1 and 12!!")
  }
  else
  {
    randDie1 = Math.floor((Math.random() * 6) + 1)
    randDie2 = Math.floor((Math.random() * 6) + 1)
    document.getElementById("die1").src = "imgs/dice/"+randDie1.toString()+".gif"
    document.getElementById("die2").src = "imgs/dice/"+randDie2.toString()+".gif"
    sum = randDie1+randDie2
    document.getElementById("value").innerHTML = "The value is : "+sum.toString();
    if(sum == 7 || sum == 11){message = "Congrats, you won!";}  
    else if(sum ==2 || sum == 3 || sum == 12){message = "Oops, you crapped out and lost because you bet " + dieSum.toString() + " :(";}
    else{message = "Guess you got nothing this round";}
  }
  document.getElementById("message").innerHTML = message;
}



// Part 4

var holidayDates = [
  "2019-09-02",
  "2019-10-14",
  "2019-11-27",
  "2019-11-28",
  "2019-11-29",
  "2019-12-21",
  "2019-12-22",
  "2019-12-23",
  "2019-12-24",
  "2019-12-25",
  "2019-12-26",
  "2019-12-27",
  "2019-12-28",
  "2019-12-29",
  "2019-12-30",
  "2019-12-31",
  "2020-01-01",
  "2020-01-02",
  "2020-01-03",
  "2020-01-04",
  "2020-01-05",
  "2020-02-17",
  "2020-03-16",
  "2020-03-17",
  "2020-03-18",
  "2020-03-19",
  "2020-03-20",
  "2020-03-21",
  "2020-03-22",
  "2020-05-25",
  "2020-07-03",
  "2020-07-04" 
];

var holidayNames = [
  "Labor Day",
  "Fall Recess",
  "Thanksgiving Break",
  "Thanksgiving Break",
  "Thanksgiving Break",
];

for(var i=0; i<16; i++){
  holidayNames.push("Winter Break");
}

holidayNames.push("President's Day");

for(var i=0; i<7; i++){
  holidayNames.push("Spring Break");
}

holidayNames.push("Memorial Day");
holidayNames.push("Independence Day");
holidayNames.push("Independence Day");

var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

function checkDate(){
 date = new Date(document.getElementById("datetime").value);
 message = document.getElementById("message");
 console.log(document.getElementById("datetime").value);
 newDate = document.getElementById("datetime").value
 
 minDate = new Date("2019-08-25");
 maxDate = new Date("2020-08-16");
 
 if(date.valueOf() < minDate.valueOf() || date.valueOf() > maxDate.valueOf()){
  document.getElementById("message").innerHTML = "The given date is out of scope";
  document.getElementById("holidayImage").src= "imgs/blank.jpg";
  document.getElementById("citation").innerHTML = " ";
 }

 else if(holidayDates.includes(newDate.toString())){
   
   index = holidayDates.indexOf(newDate);
   document.getElementById("message").innerHTML = monthNames[date.getMonth()] + "  " + date.getDate().toString() + " " + date.getFullYear().toString() + " is " + holidayNames[index]+".";
  
   if(holidayNames[index] == "Labor Day"){
     document.getElementById("holidayImage").src= "imgs/part4/1.jpg";
  }
  if(holidayNames[index] == "Fall Recess"){
    document.getElementById("holidayImage").src= "imgs/part4/2.jpg";
  }
  if(holidayNames[index] == "Thanksgiving Break"){
    document.getElementById("holidayImage").src= "imgs/part4/3.jpg";
  }
  if(holidayNames[index] == "Winter Break"){
    document.getElementById("holidayImage").src= "imgs/part4/4.jpg";
  }
  if(holidayNames[index] == "President's Day"){
    document.getElementById("holidayImage").src= "imgs/part4/5.jpg";
  }
  if(holidayNames[index] == "Spring Break"){
    document.getElementById("holidayImage").src= "imgs/part4/6.jpg";
  }
  if(holidayNames[index] == "Memorial Day"){
    document.getElementById("holidayImage").src= "imgs/part4/7.jpg";
  }
  if(holidayNames[index] == "Independence Day"){
    document.getElementById("holidayImage").src= "imgs/part4/8.jpg";
  }

  document.getElementById("citation").innerHTML = "(Photo Obtained via Wikimedia Commons // Public Domain"
  
 }
  else{
    document.getElementById("message").innerHTML = "The given date is not an NYU Holiday"
    document.getElementById("holidayImage").src= "imgs/blank.jpg";
    document.getElementById("citation").innerHTML = " ";
  }
}
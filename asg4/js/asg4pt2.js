var obj = document.getElementById("btn1");
obj.addEventListener("click", appendNodes);

function appendNodes() {
	
    var node = document.createElement("li");
    var textnode = document.createTextNode("Data Structures");
    node.appendChild(textnode);
    document.getElementById("csClasses").appendChild(node);

    var node2 = document.createElement("li");
	var textnode2 = document.createTextNode("Algorithms");
	node2.appendChild(textnode2);
    document.getElementById("csClasses").appendChild(node2);

    var node3 = document.createElement("li");
	var textnode3 = document.createTextNode("Computer Systems Organisation");
	node3.appendChild(textnode3);
    document.getElementById("csClasses").appendChild(node3);

    var node4 = document.createElement("li");
	var textnode4 = document.createTextNode("Operating Systems");
	node4.appendChild(textnode4);
    document.getElementById("csClasses").appendChild(node4);

    var node5 = document.createElement("li");
	var textnode5 = document.createTextNode("Software Engineering");
	node5.appendChild(textnode5);
    document.getElementById("csClasses").appendChild(node5);

    var node6 = document.createElement("li");
	var textnode6 = document.createTextNode("Computer Networks");
	node6.appendChild(textnode6);
    document.getElementById("csClasses").appendChild(node6);


var listItems = document.querySelectorAll('li');                   

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                            
for (i = 1; i < listItems.length; i++) {            
// Loop through elements
  listItems[i].className = 'hot';                                 
  
}

}
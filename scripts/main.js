var myImage = document.querySelector(".ship");

myImage.onclick = function () {
var mySrc = myImage.getAttribute("src");
if (mySrc === "images/pirateship3-1280.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
} else {
    myImage.setAttribute("src", "images/pirateship3-1280.jpg");
    }    
};

var myImage2 = document.querySelector(".pirate");

myImage2.onclick = function () {
var mySrc1 = myImage2.getAttribute("src");
if (mySrc1 === "images/stronghold1280.jpg") {
    myImage2.setAttribute("src", "images/goldenagepiracy.jpg");
} else {
    myImage2.setAttribute("src", "images/stronghold1280.jpg");
    }
};

var myImage3 = document.querySelector("img");

myImage3.onclick = function () {
var mySrc2 = myImage3.getAttribute("src");
if (mySrc2 === "images/piratechest1280.jpg") {
    myImage3.setAttribute("src", "images/pirateship1280.jpg");
} else {
    myImage3.setAttribute("src", "images/piratechest1280.jpg");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() { 
    var myName = prompt("Please enter your name."); 
    localStorage.setItem("name", myName); 
    myHeading.textContent = "Добро пожаловать, " + myName; 
}
if (!localStorage.getItem("name")) { 
    setUserName();
 } else { var storedName = localStorage.getItem("name"); 
 myHeading.textContent = "Добро пожаловать, " + storedName; 
}

myButton.onclick = function () { 
    setUserName(); 
};
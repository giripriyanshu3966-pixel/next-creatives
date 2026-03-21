const url="https://script.google.com/macros/s/AKfycbwnVLGB32SroBcV0FXm0nJ22qZxKfG6j3AYi94xGwbym9Tp0E7KSP8znGB3UwN2hSSf/exec";

// LOADER
window.addEventListener("load", function(){
document.getElementById("loader").style.display = "none";
});

// SUBMIT CREATOR
function submitCreator(){

let data = new URLSearchParams();

data.append("type","creator");
data.append("name",document.getElementById("name").value);
data.append("instagram",document.getElementById("instagram").value);
data.append("followers",document.getElementById("followers").value);
data.append("niche",document.getElementById("niche").value);
data.append("email",document.getElementById("email").value);
data.append("phone",document.getElementById("phone").value);

fetch(url,{
method:"POST",
mode:"no-cors",
body:data
});

alert("Creator Submitted Successfully");

// CLEAR FORM
document.getElementById("name").value="";
document.getElementById("instagram").value="";
document.getElementById("followers").value="";
document.getElementById("niche").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";
}

// SUBMIT BRAND
function submitBrand(){

let data = new URLSearchParams();

data.append("type","brand");
data.append("brand",document.getElementById("brandname").value);
data.append("typebrand",document.getElementById("typebrand").value);
data.append("email",document.getElementById("brandemail").value);
data.append("phone",document.getElementById("brandphone").value);

fetch(url,{
method:"POST",
mode:"no-cors",
body:data
});

alert("Brand Submitted Successfully");

// CLEAR FORM
document.getElementById("brandname").value="";
document.getElementById("typebrand").value="";
document.getElementById("brandemail").value="";
document.getElementById("brandphone").value="";
}

// SCROLL ANIMATION
window.addEventListener("scroll", function(){
let reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(el){
let windowHeight = window.innerHeight;
let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}
});
});

// DARK MODE
function toggleDark(){
document.body.classList.toggle("dark");
}

// COUNTER
let counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
counter.innerText = "0";

let updateCounter = () => {
let target = +counter.getAttribute("data-target");
let count = +counter.innerText;

let increment = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter, 20);
}else{
counter.innerText = target;
}
};

updateCounter();
});

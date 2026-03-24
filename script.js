const url="https://script.google.com/macros/s/AKfycbwnVLGB32SroBcV0FXm0nJ22qZxKfG6j3AYi94xGwbym9Tp0E7KSP8znGB3UwN2hSSf/exec";

// CREATOR
function submitCreator(){

let data = new URLSearchParams();

// GET VALUES SAFELY
let name = document.getElementById("name").value;
let instagram = document.getElementById("instagram").value;
let followers = document.getElementById("followers").value;
let niche = document.getElementById("niche").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

// VALIDATION
if(!name || !instagram){
alert("Please fill required fields");
return;
}

data.append("type","creator");
data.append("name", name);
data.append("instagram", instagram);
data.append("followers", followers);
data.append("niche", niche);
data.append("email", email);
data.append("phone", phone);

// SEND DATA
fetch(url,{
method:"POST",
mode:"no-cors",
body:data
});

alert("✅ Creator Submitted Successfully");

// CLEAR FORM
document.getElementById("name").value="";
document.getElementById("instagram").value="";
document.getElementById("followers").value="";
document.getElementById("niche").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";
}


// BRAND
function submitBrand(){

let data = new URLSearchParams();

// GET VALUES SAFELY
let brand = document.getElementById("brandname").value;
let typebrand = document.getElementById("typebrand").value;
let email = document.getElementById("brandemail").value;
let phone = document.getElementById("brandphone").value;

// VALIDATION
if(!brand){
alert("Please enter brand name");
return;
}

data.append("type","brand");
data.append("brand", brand);
data.append("typebrand", typebrand);
data.append("email", email);
data.append("phone", phone);

// SEND DATA
fetch(url,{
method:"POST",
mode:"no-cors",
body:data
});

alert("✅ Brand Submitted Successfully");

// CLEAR FORM
document.getElementById("brandname").value="";
document.getElementById("typebrand").value="";
document.getElementById("brandemail").value="";
document.getElementById("brandphone").value="";
}


// SCROLL ANIMATION
window.addEventListener("scroll", function(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
});


// DARK MODE
function toggleDark(){
document.body.classList.toggle("dark");
}


// COUNTER
document.querySelectorAll(".counter").forEach(counter=>{
let update=()=>{
let target=+counter.dataset.target;
let count=+counter.innerText;
let inc=target/100;

if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

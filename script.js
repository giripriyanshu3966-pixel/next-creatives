const url="https://script.google.com/macros/s/AKfycbwnVLGB32SroBcV0FXm0nJ22qZxKfG6j3AYi94xGwbym9Tp0E7KSP8znGB3UwN2hSSf/exec";

// CREATOR
function submitCreator(){
let data = new URLSearchParams();

data.append("type","creator");
data.append("name",name.value);
data.append("instagram",instagram.value);
data.append("followers",followers.value);
data.append("niche",niche.value);
data.append("email",email.value);
data.append("phone",phone.value);

fetch(url,{method:"POST",mode:"no-cors",body:data});

alert("Creator Submitted Successfully");
}

// BRAND
function submitBrand(){
let data = new URLSearchParams();

data.append("type","brand");
data.append("brand",brandname.value);
data.append("typebrand",typebrand.value);
data.append("email",brandemail.value);
data.append("phone",brandphone.value);

fetch(url,{method:"POST",mode:"no-cors",body:data});

alert("Brand Submitted Successfully");
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

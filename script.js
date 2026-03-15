const url="https://script.google.com/macros/s/AKfycbwnVLGB32SroBcV0FXm0nJ22qZxKfG6j3AYi94xGwbym9Tp0E7KSP8znGB3UwN2hSSf/exec";

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

}



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

}

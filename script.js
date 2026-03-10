const { jsPDF } = window.jspdf;

document.getElementById("signupForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;
let cpass = document.getElementById("cpass").value;

if(pass !== cpass){
alert("Password not match");
return;
}

document.getElementById("welcome").innerText =
"Welcome to our website " + name;

let userID = "EDU" + Math.floor(Math.random()*1000000);

let photoInput = document.getElementById("photo");
let file = photoInput.files[0];

let reader = new FileReader();

reader.onload = function(event){

let img = event.target.result;

let pdf = new jsPDF();

pdf.setFontSize(18);
pdf.text("Student Registration", 70, 20);

pdf.setFontSize(12);

pdf.text("Name: " + name, 20, 50);
pdf.text("Phone: " + phone, 20, 60);
pdf.text("Email: " + email, 20, 70);
pdf.text("User ID: " + userID, 20, 80);

pdf.addImage(img, "JPEG", 150, 40, 40, 40);

pdf.save(name + "_registration.pdf");

}

reader.readAsDataURL(file);

});
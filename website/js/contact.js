const form = document.getElementById("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully ☕");

form.reset();

});
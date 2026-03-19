let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}

function loadCart(){

let container = document.getElementById("cartItems");

let total = 0;

cart.forEach(item => {

total += item.price;

let div = document.createElement("div");

div.innerHTML = `
<p>${item.name}</p>
<p>₹${item.price}</p>
`;

container.appendChild(div);

});

document.getElementById("total").innerText = total;

}
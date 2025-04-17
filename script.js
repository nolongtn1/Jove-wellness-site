const products = [
  { id: 1, name: "Herbal Tea Blend", price: 12.99 },
  { id: 2, name: "Aromatherapy Oil", price: 18.5 },
  { id: 3, name: "Wellness Journal", price: 9.99 },
];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
let cart = [];

products.forEach(product => {
  const item = document.createElement("div");
  item.className = "product";
  item.innerHTML = \`
    <h3>\${product.name}</h3>
    <p>$\${product.price.toFixed(2)}</p>
    <button onclick="addToCart(\${product.id})">Add to Cart</button>
  \`;
  productList.appendChild(item);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = \`\${item.name} - $\${item.price.toFixed(2)} 
      <button onclick="removeFromCart(\${index})">Remove</button>\`;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
  this.reset();
});
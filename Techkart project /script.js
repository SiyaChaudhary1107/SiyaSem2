const products = [

{
id:1,
name:"Laptop",
price:50000,
image:"https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg"
},

{
id:2,
name:"Mobile",
price:20000,
image:"https://darlingretail.com/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__WWEN_600x.jpg?v=1695103868"
},

{
id:3,
name:"Headphones",
price:3000,
image:"https://m.media-amazon.com/images/I/610ub5kytVL._AC_UF1000,1000_QL80_.jpg"
},

{
id:4,
name:"Smart Watch",
price:5000,
image:"https://www.mytrendyphone.eu/images/F67-Pro-Smart-Watch-with-ECG-Blood-Sugar-and-Uric-Acid-Monitoring-BlackNone-14122024-00-p.webp"
}

];

let cart=[];

const productContainer =
document.getElementById("products");

function displayProducts(data){

productContainer.innerHTML="";

data.forEach(product=>{

productContainer.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`;

});

}

displayProducts(products);

function addToCart(id){

const item =
products.find(p=>p.id===id);

cart.push(item);

updateCart();

}

function updateCart(){

const cartItems =
document.getElementById("cartItems");

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<span>
${item.name} - ₹${item.price}
</span>

<button onclick="removeItem(${index})">
Remove
</button>

</div>

`;

});

document.getElementById("total")
.innerText=`Total: ₹${total}`;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

document
.getElementById("search")
.addEventListener("keyup",function(){

const value =
this.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filtered);

});
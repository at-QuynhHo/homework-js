var product = [];
var cart = [];
function Products(id, image, name, price){
  this.Id = id;
  this.Image = image;
  this.Name = name;
  this.Price = price;
}
var p1 = new Products("p1","img1.jpg","Prom dress-1",4.0);
var p2 = new Products("p2","img2.jpg","Prom dress-2",3.0);
var p3 = new Products("p3","img3.jpg","Prom dress-3",4.6);
var p4 = new Products("p4","img4.jpg","Prom dress-4",5.9);
var p5 = new Products("p5","img5.jpg","Prom dress-5",2.9);
var p6 = new Products("p6","img6.jpg","Prom dress-6",3.9);
var p7 = new Products("p7","img7.jpg","Prom dress-7",6.9);
var p8 = new Products("p8","img8.jpg","Prom dress-8",7.9);

product.push(p1);
product.push(p2);
product.push(p3);
product.push(p4);
product.push(p5);
product.push(p6);
product.push(p7);
product.push(p8);

localStorage.Products = JSON.stringify(product);
if(!localStorage.ShoppingCart){
	saveCart();
}
window.onload = function(){
	var content = document.getElementById('aside-cart');
	for (var i in product) {
		content.innerHTML += 
			'<article>'
			+ '<img src="images/'+product[i].Image+'" alt=""/><br>'
			+ '<b>'+product[i].Name+'</b><br>'
			+ 'Fashion '+product[i].Id+' The product has a gentle but luxurious design, honoring the beauty of women<br>'
			+ ' Price: <b>$ '+product[i].Price+'</b>'
			+ '<div id="section-bution"></div>'
			+ ' <button type="submit"class="addCart" onclick="addCart(' + product[i].Id +')">Add to cart</button>'
			+'</article>';

	}
	product = JSON.parse(localStorage.Products);
	loadCountCart();
	cart = loadCart();

};

function addCart(product) {
	cart = loadCart();
	var item = {
		Id : product.Id,
		quantity : 1
	};
	if(!checkNumberOfItem(item.Id)) {

		cart.push(item);
	} else {
		for ( var i in cart) {
			if (cart[i].Id === item.Id) {
				cart[i].quantity += 1;
				break;
			}
		}
	}
	saveCart();
	loadCountCart();
};
function saveCart() {
	localStorage.ShoppingCart = JSON.stringify(cart);
}
function loadCart() {
	return JSON.parse(localStorage.ShoppingCart);
}
function loadCountCart() {
	cart = loadCart();
	var count = 0;
	for (var i in cart) {
		count += cart[i].quantity;
	}
	document.querySelector('#buy').innerHTML = count;
}
function checkNumberOfItem(idItem) {
	cart = loadCart();
	var empty = 0;
	for ( var j = 0; j < cart.length; j++) {
		if (cart[j].Id === idItem) {
			empty = cart[j].quantity;
			break;
		}
	}
	console.log(empty);
	return empty;
}


var product = loadProducts();
var cart = loadCart();

window.onload = function () {

    innerProducts();

}
function saveCart() {
    localStorage.ShoppingCart = JSON.stringify(cart);
}
function loadCart() {
    return JSON.parse(localStorage.ShoppingCart);
}
function loadProducts() {
    return JSON.parse(localStorage.Products);
}
function innerProducts() {
    document.getElementById("cart-items").innerHTML = '';
    var tableBody = document.getElementById("cart-items");
    var model = document.getElementById('cart-items');
    model.innerHTML = '';
    var cart = loadCart();
    var totalPrice = 0;
    var checkEmpty = true;
    for (var i = 0; i < cart.length; i++) {
        for (var j = 0; j < product.length; j++) {
            if (cart[i].Id === product[j].Id) {
                //in ra man hinh
                model.innerHTML +=
                    '<tr>'
                    + '<td>' + product[j].Id + '</td>'
                    + '<td><img class="cart-item-image" src="images/' + product[j].Image + '" alt=""></td>'
                    + '<td><span>' + product[j].Name + '</span></td>'
                    + '<td>$ ' + product[j].Price + '</td>'
                    + '<td><input type="number" data-idAtt="' + cart[i].Id + '"  class="cart-quantity-input" min="0" step="1" value="' + cart[i].quantity + '"></td>'
                    + '<td><button  class="btn btn-danger" type="button" onclick="removeCart(\'' + product[j].Id + '\')">REMOVE</button></td>'
                    + '</tr>';
                totalPrice += Number((product[j].Price)*(cart[i].quantity));
                checkEmpty = false;
                break;
            }
        }
    }
    console.log(totalPrice);
    if (checkEmpty) {
        tableBody.innerHTML = '<br><p><i>Empty!</i></p>';
    } else {
        tableBody.innerHTML += '<tr>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td>Total: </td>' +
            '<td>$ '+ totalPrice +'</td>' +
            '</tr>';
    }
    removeCart();
    changeQuantity();
}
function changeQuantity() {
    cart = loadCart();
    var qttClass = document.getElementsByClassName("cart-quantity-input");
    for (var j = 0; j < qttClass.length; j++) {
        qttClass[j].addEventListener('change', function () {
            for (var i = 0; i < cart.length; i++) {
                if(cart[i].Id === this.getAttribute('data-idAtt')) {
                    cart[i].quantity = Number(this.value);
                    saveCart();
                    innerProducts();
                    break;
                }
            }
        });
    }
}

function removeCart(id) {
    cart = loadCart();
    for (var j = 0; j < cart.length; j++) {
        if(cart[j].Id === id) {
            cart.splice(j,1);
            saveCart();
            innerProducts();
            break;
        }
    }

}
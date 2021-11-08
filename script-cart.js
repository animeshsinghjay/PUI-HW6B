// Getting stuff from local storage

const storedValue1 = JSON.parse(localStorage.getItem('savedCart'));
const arrayOfJSObj1 = storedValue1 ? storedValue1 : []; 


const cartDiv = document.getElementById('cart-container');
//const template = document.getElementById('cart-item-template');

// Product in Cart

function updateCartNumber(newNumber) {
	
	document.getElementById("cart_count").innerHTML="&nbsp;"+newNumber+"&nbsp;";
	document.getElementById("cart_count").style.background = "#FFE8E3";
	document.getElementById("cart_count").style.border = "4px";
}

function showProductInCart(product) {

	let thecode = '<div id="prod_'+ product.id +'" class="row ht-20"><div class="r1grid"><div class="r1_item i-1 item_name">'+ product.name +'</div><div class="r1_item i-2 item_details">' + "Color: " + product.color + " | Size: " + product.size + '</div><div class="r1_item i-3 item_quantity"><input id="inp_'+ product.id +'" class="input_quantity" type="number" value="'+ product.quantity +'" min="1" max="10"></div><div class="r1_item i-4 item_price">'+ product.price +'</div><button id="del_'+ product.id +'" class="r1_item i-5 item_remove"><img src="./assets/images/delete_icon.png" alt="Del" height="40%" width="25%"></button></div></div>';
	document.getElementById("cart-container").innerHTML += thecode; 
	calculateTotalPrice();
}

for (let i = 0; i < arrayOfJSObj1.length; i++) {
    arrayOfJSObj1[i].id = i; 
	showProductInCart(arrayOfJSObj1[i]);
}

if(arrayOfJSObj1.length>0){
	updateCartNumber(arrayOfJSObj1.length);
}

function calculateTotalPrice() {
	let totalPrice = 0; 
	for (let i = 0; i < arrayOfJSObj1.length; i++) {
		totalPrice += Number(arrayOfJSObj1[i].price.slice(1)); 
	}
	document.getElementById("total_price").innerHTML = "$"+totalPrice;
}


// Quantity of Products in Cart

if (document.addEventListener) {
    document.addEventListener("change", handleChange, false);
}
function handleChange(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "INPUT" && /input_quantity/.test(element.className)) {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "item_remove"
            doSomethingHere(element);
            break;
        }
        element = element.parentNode;
    }
}

function doSomethingHere(button) {
    // do something with button
	let find_inp_id = "";
	find_inp_id = button.id;
	find_inp_id = find_inp_id.slice(4);
	let new_price = arrayOfJSObj1[parseInt(find_inp_id)].price; 
	new_price = new_price.slice(1);
	arrayOfJSObj1[parseInt(find_inp_id)].price = "$" + Number(new_price) * Number(button.value);
	arrayOfJSObj1[parseInt(find_inp_id)].quantity = Number(button.value);
	localStorage.setItem('savedCart', JSON.stringify(arrayOfJSObj1));
	document.getElementById("cart-container").innerHTML = "";
	for (let i = 0; i < arrayOfJSObj1.length; i++) {
		arrayOfJSObj1[i].id = i; 
		showProductInCart(arrayOfJSObj1[i]);
	}
	calculateTotalPrice();
}

// Delete Buttons

if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON" && /item_remove/.test(element.className)) {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "item_remove"
            doSomething(element);
            break;
        }
        element = element.parentNode;
    }
}

function doSomething(button) {
    // do something with button
	let find_del_id = "";
	find_del_id = button.id;
	find_del_id = find_del_id.slice(4);
	arrayOfJSObj1.splice(parseInt(find_del_id),1);
	updateCartNumber(arrayOfJSObj1.length);
	localStorage.setItem('savedCart', JSON.stringify(arrayOfJSObj1));
	document.getElementById("cart-container").innerHTML = "";
	for (let i = 0; i < arrayOfJSObj1.length; i++) {
		arrayOfJSObj1[i].id = i; 
		showProductInCart(arrayOfJSObj1[i]);
	}
	calculateTotalPrice();
}

// let delButts = document.getElementsByClassName("item_remove");
// for (let j = 0; j < delButts.length; j++) {
// 	delButts[j].addEventListener("click", function() {
// 		arrayOfJSObj1.splice(j,1);
// 		updateCartNumber(arrayOfJSObj1.length);
// 		localStorage.setItem('savedCart', JSON.stringify(arrayOfJSObj1));
// 		document.getElementById("cart-container").innerHTML = "";
// 		for (let i = 0; i < arrayOfJSObj1.length; i++) {
// 			arrayOfJSObj1[i].id = i+1; 
// 			showProductInCart(arrayOfJSObj1[i]);
// 		}
// 	});
// }	


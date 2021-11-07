//Color Buttons

let colorButtons = document.getElementsByClassName("color_button");

function updateColorPanel(selected_id) {
	
	let colorButts = document.getElementsByClassName("color_button");
	for (let j = 0; j < colorButts.length; j++) {
		colorButts[j].classList.remove("selected");
	}	
	document.getElementById(selected_id).classList.add("selected");
	
	let img_src = "./assets/images/product-dog-harness/"+ selected_id +".png";
	document.getElementById("item_image").src=img_src;

}

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", function() {
		updateColorPanel(this.id);
	});
}

//Size Buttons

let sizeButtons = document.getElementsByClassName("size_button");

function updateSizePanel(selected_id) {
	
	let sizeButts = document.getElementsByClassName("size_button");
	for (let j = 0; j < sizeButts.length; j++) {
		sizeButts[j].classList.remove("selected");
	}	
	document.getElementById(selected_id).classList.add("selected");

}

for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].addEventListener("click", function() {
		updateSizePanel(this.id);
	});
}

// Add to Cart

function Item (iname, iprice, icolor, isize, iquantity){
	this.name = iname;
	this.price = iprice;
	this.color = icolor;
	this.size = isize;
	this.quantity = iquantity;
	this.id = 0; 
}

function updateCartNumber(newNumber) {
	
	document.getElementById("cart_count").innerHTML="&nbsp;"+newNumber+"&nbsp;";
	document.getElementById("cart_count").style.background = "#FFE8E3";
	document.getElementById("cart_count").style.border = "4px";
}

const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const arrayOfJSObj = storedValue ? storedValue : []; 

if(arrayOfJSObj.length>0){
	updateCartNumber(arrayOfJSObj.length);
}

document.getElementById("add-to-cart").addEventListener("click", function() {
	
	let sname = document.getElementById("item_name").firstChild.nodeValue;
	let sprice = document.getElementById("item_price").firstChild.nodeValue;
	let selectedParams = document.getElementsByClassName("selected");
	let scolor = selectedParams[0].lastChild.nodeValue;
	let ssize = selectedParams[1].lastChild.nodeValue;
	
	let itemSelected = new Item (sname,sprice,scolor,ssize,1);

	// if (localStorage.cart) {
	// 	let arrayOfJSObj = JSON.parse(localStorage.getItem('cart'));
	// 	arrayOfJSObj.push(itemSelected);
	// 	localStorage.setItem('cart',JSON.stringify(arrayOfJSObj));
	// } else {
	// 	let newArrayOfJSObj = [];
	// 	newArrayOfJSObj.push(itemSelected);
	// 	localStorage.setItem('cart',JSON.stringify(newArrayOfJSObj));
	// }

	arrayOfJSObj.push(itemSelected);

	localStorage.setItem('savedCart', JSON.stringify(arrayOfJSObj));

	//updateCartNumber(localStorage.cart.length);
	updateCartNumber(arrayOfJSObj.length);

});
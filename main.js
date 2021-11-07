function updateCartNumber(newNumber) {
	
	document.getElementById("cart_count").innerHTML="&nbsp;"+newNumber+"&nbsp;";
	document.getElementById("cart_count").style.background = "#FFE8E3";
	document.getElementById("cart_count").style.border = "4px";
}

const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const arrayOfJSObj2 = storedValue ? storedValue : []; 

if(arrayOfJSObj2.length>0){
	updateCartNumber(arrayOfJSObj2.length);
}
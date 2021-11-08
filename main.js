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


function startBazarCarousel() {
    
    //creating a listener on carousel creation
    $('.carousel-home').on('initialized.owl.carousel translate.owl.carousel', function(e) {
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx - 1).addClass('medium');
        $('.owl-item').eq(idx + 1).addClass('medium');
        $('.owl-item').eq(idx - 2).addClass('medium');
        $('.owl-item').eq(idx + 2).addClass('medium');
    });

    //creation of the carousel
    $('.carousel-home').owlCarousel({
        center: true,
        items: 5,
        loop: true,
        dots: false,
        margin: 5,
        touchDrag: true,
        mouseDrag: true
    })

    $('.carousel-next').click(function() {
        $('.carousel-home').trigger('next.owl.carousel');
    });
    $('.carousel-prev').click(function() {
        $('.carousel-home').trigger('prev.owl.carousel');
    });

    $(document).on("click", ".owl-item", function() {

    });

}

startBazarCarousel();
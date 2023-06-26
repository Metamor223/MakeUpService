$(document).ready(function(){
	$('.header__burger,.header__link').click(function(event){
	    $('.header__burger,.header_menu').toggleClass('active');
	    $('body').toggleClass('lock');
	});
})

const swiper = new Swiper('.swiper-container',{

      loop: true,

	pagination:{
		el:'.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	autoHeight: true
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


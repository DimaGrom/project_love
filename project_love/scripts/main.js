
window.onload = function() {
	console.log('Страница загружена');


function counDown() {
	var now = new Date();

	var year = document.querySelector('.header__year');
	var days = document.querySelector('.days');
	var hours = document.querySelector('.hours');
	var minues = document.querySelector('.minues');
	var seconds = document.querySelector('.seconds');

	year.innerText = now.getFullYear();
	days.innerText = now.getDate();
	hours.innerText = now.getHours();
	minues.innerText = now.getMinutes();
	seconds.innerText = now.getSeconds();
}

setInterval(function() { counDown() }, 1000);






$('.min-skreen').owlCarousel({
	responsive: {
		0: { items: 1 },
		610: { items: 2 }
	},
	smartSpeed: 1200,
	loop: true
});


$('.owl-carousel__section-4').owlCarousel({

	responsive: {
		0: { items: 1 },
		770: { items: 2 }
	},
	smartSpeed: 1200,
	loop: true

});


$('.section-5__owl-carousel').owlCarousel({

	responsive: {
		0: { items: 1 },
		770: { items: 2 }
	},
	smartSpeed: 1200,
	loop: true

});


}  // END window.onload



























console.log('\'Allo \'Allo!');
var messageEl;
var messageRect;

function init(){

	messageEl = document.querySelector('.phone');

	window.addEventListener('scroll', windowScroll);
	console.log('done')
}
function windowScroll(){
	console.log('hi hi ')
	var messageRect = messageEl.getBoundingClientRect();
	var windowTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
	var windowHeight = window.innerHeight;



	var midPoint = messageRect.top + messageRect.height/2;


	console.log(midPoint, windowTop, windowHeight)
	if( messageRect.bottom > 0 && messageRect.top < windowHeight){
		messageEl.classList.add('showMessages');
	} else {
		messageEl.classList.remove('showMessages');
	}

}

window.onload = init;
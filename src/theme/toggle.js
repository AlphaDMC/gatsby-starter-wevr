//
// Toggles
//
const $ = require('jquery');
var Toggle = function() {
	var $toggle = $(".c-toggle"),
		toggleButton = ".c-toggle__btn";

	$toggle.on('click', toggleButton, function(e){
		$(this)
			.addClass('is-active')
			.siblings()
			.removeClass('is-active');
		return false;
	});
};

module.exports = Toggle;
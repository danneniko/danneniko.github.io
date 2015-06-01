$(function() {
	var toggles = document.querySelectorAll(".nav-switch");

	function addToggleHandler(toggle) {
	    toggle.addEventListener("click", function(e) {
	        e.preventDefault();
	        (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
	    });
	}

	[].forEach.call(toggles, addToggleHandler);


	$( ".nav-switch" ).click(function() {
	    $(".nav").toggleClass("nav-open");
	    $(".nav a").toggleClass("open-items");
	});
});
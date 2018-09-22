

$(document).ready(function() {
	if (localStorage.getItem("theme") == "dark") {
		setDark();
	}
});

$("#cbx-theme").ready(function() {
	if (localStorage.getItem("theme") == "dark") {
		$("#cbx-theme").prop("checked", true);
	}
});

$(document).on('change', '#cbx-theme', function() {
	if (this.checked) {
		setDark();
	} else {
		setLight();
	}
});

function setDark() {
	console.log("yes");
	localStorage.setItem("theme", "dark");
	
	$("body").css("background-color", "#282828");
	$("img").css("-webkit-filter", "invert(1)");
	$("img").css("filter", "invert(1)");
	
	$("button").addClass("inverted");
	$(".segment").addClass("inverted");
	$(".menu").addClass("inverted");
	$(".dropdown").addClass("inverted");
	$(".item").addClass("inverted");
	$(".message").addClass("inverted");
}

function setLight() {
	localStorage.setItem("theme", "light");
		
	$("body").css("background-color", "#F7F7F7");
	$("img").css("-webkit-filter", "invert(0)");
	$("img").css("filter", "invert(0)");
	
	$("button").removeClass("inverted");
	$(".segment").removeClass("inverted");
	$(".menu").removeClass("inverted");
	$(".dropdown").removeClass("inverted");
	$(".item").removeClass("inverted");
	$(".message").removeClass("inverted");
}
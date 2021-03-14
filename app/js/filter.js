"use strict";
$(function () {
	let label = document.querySelector("[for=price-filter]");
	let slider = document.querySelector(".filter__range");
	function range_changed(event, ui) {
		label.textContent = "Цена: " + ui.values[0] + " - "
			+ ui.values[1] + " руб.";
	}
	$(slider).slider({
		range: true,
		min: 0,
		max: 800,
		values: [100, 500],
		change: range_changed,
		slide: range_changed,
		classes: {
			"ui-slider": "slider-range",
			"ui-slider-range": "slider-range-between",
			"ui-slider-handle": "slider-range-handle",
		},
	});
});

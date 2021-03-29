'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const closeBtn = document.querySelector('#feedback-close-btn');
	const submitBtn = document.querySelector('#feedback-submit-btn');
	const addressBtn = document.querySelector('.address__button');
	addCloseEvent(closeBtn, submitBtn, addressBtn);
	/* closeBtn.addEventListener('click', switchDisplayFeedbackForm);
	submitBtn.addEventListener('click', switchDisplayFeedbackForm); */

});

function switchDisplayElement(form) {
	form.classList.toggle('visually-hidden');
}

function switchDisplayFeedbackForm() {
	const box = document.querySelector('.page__feedback-box');
	switchDisplayElement(box);
}

function addCloseEvent(elements) {
	for (let i = 0; i < arguments.length; i++) {
		arguments[i].addEventListener('click', switchDisplayFeedbackForm);
	}
}

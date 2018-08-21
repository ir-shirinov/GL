var btnFeedback = document.querySelector('.contacts-container button');
var modalFeedback = document.querySelector('.feedback');
var btnClose = document.querySelector('.close');
var nameUser = document.querySelector('#feedback-name');
var saveName = localStorage.getItem('name');
var emailUser = document.querySelector('#feedback-email');
var saveEmail = localStorage.getItem('email');
var btnSubmit = document.querySelector('.feedback [type=submit]');

btnFeedback.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalFeedback.classList.add('modal-show');
	if (saveName && saveEmail) {
		nameUser.value = saveName;
		emailUser.value = saveEmail;
	} else {
		nameUser.focus();
	};
});

btnClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalFeedback.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt){
	if (evt.keyCode === 27) {
		if (modalFeedback.classList.contains('modal-show')) {
			modalFeedback.classList.remove('modal-show');
		};
	};
});


btnSubmit.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (nameUser.value) {
		localStorage.setItem('name',nameUser.value);
	};
	if (emailUser.value) {
		localStorage.setItem('email',emailUser.value);
	};
});
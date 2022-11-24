// 1. btn valuelarni bosganda uning qiymati inputta paydo bolishi kerak !

// 2. input ichidagi sonni onlik qismida nechi bolsa oshancha  doira chap tomonda chiqadi !

// 3. inputdagi sonni birlik qismida nechta son bolsa oshancha doira ong tomonda chiqadi !

// 4. va inputta son kiritilishi blan doiralar ustidan   border paydo boladi !

"use strict";

let elButton = document.querySelector(".btn");
let elButtonOne = document.querySelector(".btn1");
let elButtonTwo = document.querySelector(".btn2");
let elButtonThree = document.querySelector(".btn3");
let elButtonFour = document.querySelector(".btn4");
let elButtonFive = document.querySelector(".btn5");
let elButtonsix = document.querySelector(".btn6");
let elButtonSeven = document.querySelector(".btn7");
let elButtonEight = document.querySelector(".btn8");
let elButtonNine = document.querySelector(".btn9");

let elform = document.querySelector(".form");
let elInput = document.querySelector("#form__input");
let elSubmit = document.querySelector(".submit");

elButton.addEventListener("click", function (e) {
	e.preventDefault();

     let btn = elButton.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btn;
});

elButtonOne.addEventListener("click", function (e) {
	e.preventDefault();

     let btnOne = elButtonOne.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnOne;
});

elButtonTwo.addEventListener("click", function (e) {
	e.preventDefault();

     let btnTwo = elButtonTwo.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnTwo;
});

elButtonThree.addEventListener("click", function (e) {
	e.preventDefault();

     let btnThree = elButtonThree.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnThree;
});

elButtonFour.addEventListener("click", function (e) {
	e.preventDefault();

     let btnFour = elButtonFour.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnFour;
});

elButtonFive.addEventListener("click", function (e) {
	e.preventDefault();

     let btnFive = elButtonFive.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnFive;
});

elButtonsix.addEventListener("click", function (e) {
	e.preventDefault();

     let btnSix = elButtonsix.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnSix;
});

elButtonSeven.addEventListener("click", function (e) {
	e.preventDefault();

     let btnSeven = elButtonSeven.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnSeven;
});

elButtonEight.addEventListener("click", function (e) {
	e.preventDefault();

     let btnEight = elButtonEight.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnEight;
});

elButtonNine.addEventListener("click", function (e) {
	e.preventDefault();

     let btnNine = elButtonNine.textContent;
     elInput.style.borderColor = "red";

	elInput.value += btnNine;
});

let elBirlik = document.querySelector(".circle__right");
let elKoplik = document.querySelector(".circle__left");


elform.addEventListener("submit", function (e) {
	e.preventDefault();
	let inputValue = Number(elInput.value);
	console.log(inputValue);

	if (inputValue <= 10) {
          elKoplik.style.border = "2px solid red";
          elBirlik.style.border = "none";
          elKoplik.style.borderRadius = "50%";
          
          
	} else {
          elBirlik.style.border = "2px solid red";
          elKoplik.style.border = "none";
		elBirlik.style.borderRadius = "50%";
	}
});

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".close");
const form = document.querySelector('form')

// form
const firstName = document.getElementById("first");
const firstError = document.getElementById("firstFieldMessage");

const lastName = document.getElementById("last");
const lastError = document.getElementById("lastFieldMessage");

const email = document.getElementById("email");
const emailError = document.getElementById("emailFieldMessage");

const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateFieldMessage");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityFieldMessage");

const locations = document.querySelectorAll("input[name='location']")
const conditions = document.getElementById("checkbox1");
const submitBtn = document.getElementById("btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form 
btnCloseModal.addEventListener("click", function() {
  modalbg.style.display = "none";
});

const regEx='^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$';
const regExEmail = /^\S+@\S+\.\S+$/;

function firstValidation(){   
  if (!firstName.value.match(regEx)) {
    firstError.textContent = "veuillez renseigner un prénom valide";
    firstName.classList.add ("error")
    return false;
  }{
    firstName.classList.add ("valid")
    firstError.textContent = "";
    return true;
  }
}

function lastValidation() {
  if (!lastName.value.match(regEx)) {
      lastError.textContent = "veuillez renseigner un nom valide";
      lastName.classList.add ("error") 
      return false;
  }{
      lastName.classList.add ("valid")
      lastError.textContent = "";
      return true;
  };
}

function emailValidation (){
  if (!email.value.match(regExEmail)) {
    emailError.textContent = "veuillez renseigner un email valide";
    email.classList.add ("error") 
    return false;
  }{
    email.classList.add ("valid")
    emailError.textContent = "";
    return true;
  }
}

function birthdateValidation() {
  let dateInput = birthdate.value; 
  let dateObj = new Date(dateInput);
  console.log(dateObj)
  const birthYear = dateObj.getFullYear();
  console.log(birthYear);
  
  const date = new Date();
  const currentYear = date.getFullYear();
  const today = date.getDate();
  const currentMonth = date.getMonth() + 1; 
  console.log(currentYear);
  console.log(currentMonth);
  console.log(today);

  function isDateValid(dateInput) {
    return !isNaN(new Date(dateInput));
  }
  console.log(isDateValid(dateInput))
  
  
  if(isDateValid(dateInput) == false) {
    birthdateError.innerHTML = "Veuillez entrer une date de naissance valide";
    birthdateError.classList.remove("valid");
    birthdateError.classList.add("error");
    return false;
  }{
    birthdateError.classList.remove("error");
    birthdateError.classList.add("valid");
    return true;
  }
};

function quantityValidation() {                      
  if (quantity.value >= 0 && quantity.value <= 9 && quantity.value.length >= 1) {
    quantityError.classList.remove("error")
    quantityError.classList.add("valid") 
    quantityError.innerHTML = ""   
    return true;
  }{
    quantityError.innerHTML = "veuillez entrer un nombre valide"
    quantityError.classList.add("error")
    quantityError.classList.remove("valid")
  } 
  
}

firstName.addEventListener('change', (event) => {
  firstValidation(firstName)
});
  
lastName.addEventListener('change', (event) => {
  lastValidation(lastName)
});

email.addEventListener('change', (event) => {
  emailValidation(email)
});

birthdate.addEventListener('change', (event) => {
  birthdateValidation(birthdate)
});

quantity.addEventListener('change', (event) => {
  quantityValidation(quantity)
});



submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
 
  console.log(firstName.value, lastName.value, email.value, birthdate.value, quantity.value)
  
 
 
 });
  
  


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".close");
const form = document.querySelector('form')
const btnModalConfirmation = document.getElementById("closeconfirmation");

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
const locationsError = document.getElementById("checkboxMessage")

const conditions = document.getElementById("checkbox1");
const conditionsCheckbox1Error = document.getElementById("conditionsCheckbox_1Message")
const submitBtn = document.getElementById("btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// Close modal form 
btnCloseModal.addEventListener("click", function() {
  modalBg.style.display = "none";
});

btnModalConfirmation.addEventListener("click", function() {
  modalBg.style.display = "none";
  document.getElementById('modal2').style.display = 'none';
  form.submit();
  window.location.reload;
    
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
  
};

function locationsValidation() {
  console.log('locations', locations)
  for(let i = 0; i < locations.length; i++) {
    console.log('{{{', locations[i])
    if(locations[i].checked) {
      locationsError.innerHTML ="";
      locationsError.classList.add("valid")
      locationsError.classList.remove("error")
      return true       
    }
      
    
    
  }
  return false
}

function conditionsValidation() {
  if(conditions.checked) {
    locationsError.innerHTML ="";
    locationsError.classList.add("valid")
    locationsError.classList.remove("error")
    return true
  }{
    locationsError.innerHTML ="Veuillez accepter les conditions d'utilisations";
    locationsError.classList.remove("valid")
    locationsError.classList.add("error")
    return false
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

locations.forEach((checkbox) => checkbox.addEventListener('change', (event) => {
  locationsValidation(locations)
  console.log(locationsValidation(locations))
}));

conditions.addEventListener('change', (Event) => {
  conditionsValidation(conditions)
  console.log(conditionsValidation(conditions))
})


function validate(){ 
  if (firstValidation(firstName) && lastValidation (lastName) && emailValidation(email) 
  && birthdateValidation(birthdate) && quantityValidation(quantity) && locationsValidation(locations)){   
    document.getElementById('modal2').style.display = 'block'
    form.style.filter = "blur(4px)" 
    
  }else {
    alert("failed! try again");
  }
}


submitBtn.addEventListener('click', e => {
  e.preventDefault();
  validate();
});
  
  


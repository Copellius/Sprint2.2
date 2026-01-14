// Exercise 6

const form = document.getElementById("form");

const validate = () => {
  let error = 0;

  // Get the input fields
  const fName = document.getElementById("fName");
  const fEmail = document.getElementById("fEmail");
  const fAddress = document.getElementById("fAddress");
  const fLastN = document.getElementById("fLastN");
  const fPassword = document.getElementById("fPassword");
  const fPhone = document.getElementById("fPhone");

  // Get the error elements
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorAddress = document.getElementById("errorAddress");
  const errorLastN = document.getElementById("errorLastN");
  const errorFPassword = document.getElementById("errorPassword");
  const errorPhone = document.getElementById("errorPhone");

  // REGEX 

  const regexE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexP =  /^(?=.*[0-9])(?=.*[a-zA-Z]).+$/

  // Validate fields entered by the user: name, phone, password, and email
  if (
    fName.value.trim() == "" ||
    fName.value.trim().length < fName.getAttribute("minlength") ||
    !isNaN(fName.value.trim())
  ) {
    error++;
    fName.classList.add("is-invalid");
  }

  if (
    fEmail.value.trim() == "" ||
    !regexE.test(fEmail.value.trim()) ||
   fEmail.value.trim().length < fEmail.getAttribute("minlength")
  ) {
    error++;
    fEmail.classList.add("is-invalid");
  }

  if (
    fAddress.value.trim() == "" ||
    fAddress.value.trim().length < fAddress.getAttribute("minlength")
  ) {
    error++;
    fAddress.classList.add("is-invalid");
  }

  if (
    fLastN.value.trim() == "" ||
    fLastN.value.trim().length < fLastN.getAttribute("minlength") ||
    !isNaN(fLastN.value.trim())
  ) {
    error++;
    fLastN.classList.add("is-invalid");
  }

  if (
    fPassword.value.trim() == "" ||
    !regexP.test(fPassword.value.trim()) ||
    fPassword.value.trim().length < fPassword.getAttribute("minlength")
  ) {
    error++;
    fPassword.classList.add("is-invalid");
  }

   if (
    fPhone.value.trim() == "" ||
    fPhone.value.trim().length < fPhone.getAttribute("minlength") ||
    isNaN(fPhone.value.trim())
  ) {
    error++;
    fPhone.classList.add("is-invalid");
  }

  if (error > 0) {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully");
  }
};



form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

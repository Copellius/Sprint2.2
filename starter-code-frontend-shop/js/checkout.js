// Exercise 6

const form = document.getElementById("form");

const validate = () => {
  const fInfo = {
    fName: document.getElementById("fName"),
    fLastN: document.getElementById("fLastN"),
    fEmail: document.getElementById("fEmail"),
    fPassword: document.getElementById("fPassword"),
    fAddress: document.getElementById("fAddress"),
    fPhone: document.getElementById("fPhone"),
  };

  const regexE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexP = /^(?=.*[0-9])(?=.*[a-zA-Z]).+$/;

  let error = 0;

  for (const key in fInfo) {
    const input = fInfo[key];
    const value = input.value.trim();
    const min = 3;

    let isValid = true;

    switch (key) {
      case "fName":
      case "fLastN":
        isValid = value !== "" && value.length >= min && isNaN(value);
        break;

      case "fEmail":
        isValid = value !== "" && value.length >= min && regexE.test(value);
        break;

      case "fPassword":
        isValid = value !== "" && value.length >= min && regexP.test(value);
        break;

      case "fAddress":
        isValid = value !== "" && value.length >= min;
        break;

      case "fPhone":
        isValid = value !== "" && value.length == 9 && !isNaN(value);
        break;
    }

    if (!isValid) {
      error++;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  }

  if (error > 0) {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully");
  }
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
  });
}

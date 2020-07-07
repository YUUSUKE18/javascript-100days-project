const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkForm();
});

function checkForm() {
  const nameCheck = name.value.trim();
  const emailCheck = email.value.trim();
  const passwordCheck = password.value.trim();

  if (nameCheck === "") {
    setError(name, "Please Enter Your Name");
  } else {
    setSuccess(name);
  }
  if (emailCheck === "") {
    setError(email, "Please Enter Your Email");
  } else if (!isEmail(emailCheck)) {
    setError(email, "Please Enter Your Vaild Email");
  } else {
    setSuccess(email);
  }

  if (passwordCheck === "") {
    setError(password, "Please Enter Password");
  } else {
    setSuccess(password);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  formControl.className = "form-control error";
  span.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

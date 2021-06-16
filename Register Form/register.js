let formInputChange = (input) => {
  if (input.id === "firstNameInput") {
    if (
      input.value.length >= 2 &&
      input.value.length <= 15 &&
      input.value[0] === input.value[0].toUpperCase()
    ) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else if (
      input.value.length >= 2 &&
      input.value.length <= 15 &&
      input.value[0] !== input.value[0].toUpperCase()
    ) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("firstNameInvalidFeedback").innerText =
        "First Character needs to be uppercase.";
    } else if (
      (input.value.length < 2 || input.value.length > 15) &&
      input.value[0] === input.value[0].toUpperCase()
    ) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("firstNameInvalidFeedback").innerText =
        "First Name needs to be between 2 and 15 characters.";
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("firstNameInvalidFeedback").innerText =
        "First Name needs to be between 2 and 15 characters. First Character needs to be uppercase.";
    }
  }
  if (input.id === "lastNameInput") {
    if (
      input.value.length >= 2 &&
      input.value.length <= 15 &&
      input.value[0] === input.value[0].toUpperCase()
    ) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else if (
      input.value.length >= 2 &&
      input.value.length <= 15 &&
      input.value[0] !== input.value[0].toUpperCase()
    ) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("lastNameInvalidFeedback").innerText =
        "First Character needs to be uppercase.";
    } else if (
      (input.value.length < 2 || input.value.length > 15) &&
      input.value[0] === input.value[0].toUpperCase()
    ) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("lastNameInvalidFeedback").innerText =
        "First Name needs to be between 2 and 15 characters.";
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("lastNameInvalidFeedback").innerText =
        "First Name needs to be between 2 and 15 characters. First Character needs to be uppercase.";
    }
  }
  if (input.id === "emailInput") {
    if (validator.isEmail(input.value) === true) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("emailInvalidFeedback").innerText =
        "Invalid Email Adress";
    }
  }
  if (input.id === "passwordInput") {
    if (validator.isStrongPassword(input.value) === true) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      document.getElementById("passwordInvalidFeedback").innerText =
        "Password must contain one numerical character, one uppercase letter, one lowercase letter and one special symbol";
    }
  }
};
let showPasswordFunction = () => {
  if (document.getElementById("passwordInput").type === "password") {
    document.getElementById("passwordInput").type = "text";
  } else {
    document.getElementById("passwordInput").type = "password";
  }
};

let saveData = () => {
  let myEmail = document.getElementById("emailInput").value;
  let myPassword = document.getElementById("passwordInput").value;
  let myUsername = document.getElementById("usernameInput").value;
  let myFirstName = document.getElementById("firstNameInput").value;
  let myLastName = document.getElementById("lastNameInput").value;
  fetch("https://sharo-me.herokuapp.com/api/users/register", {
    method: "post",
    headers: {
      Accept: "application/json , text/plain, */* ",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: myFirstName,
      lastName: myLastName,
      username: myUsername,
      password: myPassword,
      email: myEmail,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === "User Added!") {
        window.location = "../LogIn Form/LogIn.html";
      } else {
        console.log(data);
      }
    });
};

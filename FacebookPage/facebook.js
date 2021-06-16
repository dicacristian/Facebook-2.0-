let isUserLoggedIn = localStorage.getItem("facebookLoggedIn");

if (isUserLoggedIn === null) {
  console.log("Redirect to Login!");
  window.location = "../LogIn Form/LogIn.html";
}

let loggedUsername = window.localStorage.getItem("facebookLoggedUsername");

if (loggedUsername != null) {
  fetch("https://sharo-me.herokuapp.com/api/users/getUser", {
    method: "post",
    headers: {
      Accept: "application/json , text/plain , */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loggedUsername,
    }),
  })
    .then((response) => response.json())
    .then((userData) => {
      document.querySelector(".user-name").innerText =
        userData.firstName + " " + userData.lastName;
      window.localStorage.setItem(
        "author",
        userData.firstName + " " + userData.lastName
      );
      window.localStorage.setItem("userId", userData.id);
    });
} else {
  console.log("Username unavailable");
}

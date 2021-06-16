let savedData = () => {
  let userId = window.localStorage.getItem("userId");
  let author = window.localStorage.getItem("author");
  let postText = document.getElementById("postText").value;
  let pictureLink = document.getElementById("photoInput").value;
  let date = new Date();
  let timeStamp = date.getTime();
  fetch("https://sharo-me.herokuapp.com/api/post/create", {
    method: "post",
    headers: {
      Accept: "application/json , text/plain , */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      postText,
      pictureLink,
      author,
      timeStamp,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === "Post Added!") {
        window.location = "../FacebookPage/facebook.html";
      } else if (data === "User Doesn't Exist") {
        window.localStorage.removeItem("userId");
        window.location = "../LogIn Form/LogIn.html";
      } else if (data === "Creating Post Failed") {
        postText = "";
        pictureLink = "";
      }
    });
};

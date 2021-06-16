fetch("https://sharo-me.herokuapp.com/api/post/getAll", {
  method: "get",
  headers: {
    Accept: "application/userId, plain/text, */*",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    let posts = data;
    for (let i = 0; i < data.length; i++) {
      let unix_timestamp = posts[i].timeStamp;
      unix_timestamp = Number(unix_timestamp);
      if (unix_timestamp < 10000000000) {
        unix_timestamp = unix_timestamp * 1000;
      }
      let postedDate = new Date(unix_timestamp);

      let day = postedDate.getDate();

      let month = postedDate.getMonth() + 1;

      let year = postedDate.getFullYear();

      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      let formattedDate = day + "/" + month + "/" + year + " - Romania";
      postContainer = document.createElement("div");
      postContainer.classList.add("post-container");

      userImgPostWrapper = document.createElement("div");
      userImgPostWrapper.classList.add("user-img-post-wrapper");

      profilePicImage = document.createElement("img");
      profilePicImage.src = "../img/poza de profil.PNG";
      profilePicImage.classList.add("user-img-post");

      userImgPostWrapper.appendChild(profilePicImage);

      postWrapper = document.createElement("div");
      postWrapper.classList.add("post-wrapper");

      postDetails = document.createElement("div");
      postDetails.classList.add("post-details");

      postDetailsAuthor = document.createElement("p");
      postDetailsAuthor.classList.add("post-details-author");
      postDetailsAuthor.innerText = posts[i].author;

      postDetailsDateLocation = document.createElement("p");
      postDetailsDateLocation.classList.add("post-details-date-location");
      postDetailsDateLocation.innerText = formattedDate;

      postDetails.appendChild(postDetailsAuthor);
      postDetails.appendChild(postDetailsDateLocation);

      postImageWrapper = document.createElement("div");
      postImageWrapper.classList.add("post-img-wrapper");

      postImage = document.createElement("img");
      postImage.classList.add("post-img");
      postImage.src = posts[i].pictureLink;

      postImageWrapper.appendChild(postImage);

      postContent = document.createElement("div");
      postContent.classList.add("post-content");

      postText = document.createElement("p");
      postText.classList.add("post-text");
      postText.innerText = posts[i].postText;

      postBtns = document.createElement("div");
      postBtns.classList.add("post-btns");

      postLikeBtnWrapper = document.createElement("div");
      postLikeBtnWrapper.classList.add("post-like-btn-wrapper");

      postLikeBtn = document.createElement("img");
      postLikeBtn.classList.add("post-like-btn");
      postLikeBtn.classList.add("like");
      postLikeBtn.src = "../img/like-btn.png";

      postLikeBtnText = document.createElement("p");
      postLikeBtnText.innerText = "Like";

      postLikeBtnWrapper.appendChild(postLikeBtn);
      postLikeBtnWrapper.appendChild(postLikeBtnText);

      postBtnSeparator = document.createElement("div");
      postBtnSeparator.classList.add("post-btn-separator");
      postBtnSeparator.innerText = "|";

      postCommentBtnWrapper = document.createElement("div");
      postCommentBtnWrapper.classList.add("post-comment-btn-wrapper");

      postCommentBtn = document.createElement("img");
      postCommentBtn.classList.add("post-like-btn");
      postCommentBtn.src = "../img/comment-btn.png";

      postCommentBtnText = document.createElement("p");
      postCommentBtnText.innerText = "Comment";

      postCommentBtnWrapper.appendChild(postCommentBtn);
      postCommentBtnWrapper.appendChild(postCommentBtnText);

      postBtns.appendChild(postLikeBtnWrapper);
      postBtns.appendChild(postBtnSeparator);
      postBtns.appendChild(postCommentBtnWrapper);

      postContent.appendChild(postText);
      postContent.appendChild(postBtns);

      postWrapper.appendChild(postDetails);
      postWrapper.appendChild(postImageWrapper);
      postWrapper.appendChild(postContent);

      postContainer.appendChild(userImgPostWrapper);
      postContainer.appendChild(postWrapper);

      document.querySelector("#posts-wrapper").appendChild(postContainer);
    }
    searchButton = () => {
      searchName = document.getElementById("searchFavWrapper").value;
      document.getElementById("posts-wrapper").innerHTML = "";
      for (let i = 0; i < posts.length; i++) {
        if (searchName === posts[i].author) {
          let unix_timestamp = posts[i].timeStamp;
          unix_timestamp = Number(unix_timestamp);
          if (unix_timestamp < 10000000000) {
            unix_timestamp = unix_timestamp * 1000;
          }
          let postedDate = new Date(unix_timestamp);

          let day = postedDate.getDate();

          let month = postedDate.getMonth() + 1;

          let year = postedDate.getFullYear();

          if (day < 10) {
            day = "0" + day;
          }
          if (month < 10) {
            month = "0" + month;
          }

          let formattedDate = day + "/" + month + "/" + year + " - Romania";

          postContainer = document.createElement("div");
          postContainer.classList.add("post-container");

          userImgPostWrapper = document.createElement("div");
          userImgPostWrapper.classList.add("user-img-post-wrapper");

          profilePicImage = document.createElement("img");
          profilePicImage.src = "../img/poza de profil.PNG";
          profilePicImage.classList.add("user-img-post");

          userImgPostWrapper.appendChild(profilePicImage);

          postWrapper = document.createElement("div");
          postWrapper.classList.add("post-wrapper");

          postDetails = document.createElement("div");
          postDetails.classList.add("post-details");

          postDetailsAuthor = document.createElement("p");
          postDetailsAuthor.classList.add("post-details-author");
          postDetailsAuthor.innerText = posts[i].author;

          postDetailsDateLocation = document.createElement("p");
          postDetailsDateLocation.classList.add("post-details-date-location");
          postDetailsDateLocation.innerText = formattedDate;

          postDetails.appendChild(postDetailsAuthor);
          postDetails.appendChild(postDetailsDateLocation);

          postImageWrapper = document.createElement("div");
          postImageWrapper.classList.add("post-img-wrapper");

          postImage = document.createElement("img");
          postImage.classList.add("post-img");
          postImage.src = posts[i].pictureLink;

          postImageWrapper.appendChild(postImage);

          postContent = document.createElement("div");
          postContent.classList.add("post-content");

          postText = document.createElement("p");
          postText.classList.add("post-text");
          postText.innerText = posts[i].postText;

          postBtns = document.createElement("div");
          postBtns.classList.add("post-btns");

          postLikeBtnWrapper = document.createElement("div");
          postLikeBtnWrapper.classList.add("post-like-btn-wrapper");

          postLikeBtn = document.createElement("img");
          postLikeBtn.classList.add("post-like-btn");
          postLikeBtn.classList.add("like");
          postLikeBtn.src = "../img/like-btn.png";

          postLikeBtnText = document.createElement("p");
          postLikeBtnText.innerText = "Like";

          postLikeBtnWrapper.appendChild(postLikeBtn);
          postLikeBtnWrapper.appendChild(postLikeBtnText);

          postBtnSeparator = document.createElement("div");
          postBtnSeparator.classList.add("post-btn-separator");
          postBtnSeparator.innerText = "|";

          postCommentBtnWrapper = document.createElement("div");
          postCommentBtnWrapper.classList.add("post-comment-btn-wrapper");

          postCommentBtn = document.createElement("img");
          postCommentBtn.classList.add("post-like-btn");
          postCommentBtn.src = "../img/comment-btn.png";

          postCommentBtnText = document.createElement("p");
          postCommentBtnText.innerText = "Comment";

          postCommentBtnWrapper.appendChild(postCommentBtn);
          postCommentBtnWrapper.appendChild(postCommentBtnText);

          postBtns.appendChild(postLikeBtnWrapper);
          postBtns.appendChild(postBtnSeparator);
          postBtns.appendChild(postCommentBtnWrapper);

          postContent.appendChild(postText);
          postContent.appendChild(postBtns);

          postWrapper.appendChild(postDetails);
          postWrapper.appendChild(postImageWrapper);
          postWrapper.appendChild(postContent);

          postContainer.appendChild(userImgPostWrapper);
          postContainer.appendChild(postWrapper);

          document.querySelector("#posts-wrapper").appendChild(postContainer);
        }
      }
    };
  });

function likeButtonClicked(button) {
    var likeCountElement = button.parentNode.querySelector('.like-count');
    var currentLikes = parseInt(likeCountElement.innerHTML);
    likeCountElement.innerHTML = currentLikes + 1;
}

function commentButtonClicked(button) {
    var commentCountElement = button.parentNode.querySelector('.comment-count');
    var currentComments = parseInt(commentCountElement.innerHTML);
    commentCountElement.innerHTML = currentComments + 1;
}

function shareButtonClicked(button) {
    var shareCountElement = button.parentNode.querySelector('.share-count');
    var currentShares = parseInt(shareCountElement.innerHTML);
    shareCountElement.innerHTML = currentShares + 1;
}

function saveButtonClicked(button) {
    var saveCountElement = button.parentNode.querySelector('.save-count');
    var currentSaves = parseInt(saveCountElement.innerHTML);
    saveCountElement.innerHTML = currentSaves + 1;
}

var commentCount = 0;

function showComments() {
  var popup = document.getElementById("comment-popup");
  popup.style.display = "block";
}

function hideComments() {
  var popup = document.getElementById("comment-popup");
  popup.style.display = "none";
}

function updateCommentCount() {
  var countElement = document.getElementById("comment-count");
  countElement.textContent = commentCount.toString();
}

function addComment() {
  var commentInput = document.getElementById("comment-input");
  var commentList = document.getElementById("comment-list");
  var commentText = commentInput.value;

  if (commentText.trim() !== "") {
    var commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");

    var userPhoto = document.createElement("img");
    userPhoto.src = "user-profile.jpg";
    commentItem.appendChild(userPhoto);

    var username = document.createElement("span");
    username.textContent = "John Doe"; // Ganti dengan username pengguna
    commentItem.appendChild(username);

    var commentTextElement = document.createElement("span");
    commentTextElement.textContent = commentText;
    commentItem.appendChild(commentTextElement);

    var replyInput = document.createElement("input");
    replyInput.type = "text";
    replyInput.placeholder = "Balas komentar...";
    commentItem.appendChild(replyInput);

    var replyButton = document.createElement("button");
    replyButton.textContent = "Balas";
    replyButton.onclick = function () {
      addReply(commentItem, replyInput.value);
    };
    commentItem.appendChild(replyButton);

    commentList.appendChild(commentItem);

    commentCount++;
    updateCommentCount();

    commentInput.value = "";
  }
}

function addReply(parentComment, replyText) {
  var replyInput = parentComment.querySelector("input");
  var replyList = document.createElement("div");
  replyList.classList.add("reply-list");

  var replyItem = document.createElement("div");
  replyItem.classList.add("reply-item");

  var userPhoto = document.createElement("img");
  userPhoto.src = "user-profile.jpg";
  replyItem.appendChild(userPhoto);

  var username = document.createElement("span");
  username.textContent = "Jane Smith"; // Ganti dengan username pengguna
  replyItem.appendChild(username);

  var replyTextElement = document.createElement("span");
  replyTextElement.textContent = replyText;
  replyItem.appendChild(replyTextElement);

  var replyReplyInput = document.createElement("input");
  replyReplyInput.type = "text";
  replyReplyInput.placeholder = "Balas komentar...";
  replyItem.appendChild(replyReplyInput);

  var replyReplyButton = document.createElement("button");
  replyReplyButton.textContent = "Balas";
  replyReplyButton.onclick = function () {
    addReply(replyItem, replyReplyInput.value);
  };
  replyItem.appendChild(replyReplyButton);

  replyList.appendChild(replyItem);

  parentComment.appendChild(replyList);

  replyInput.value = "";
}





// function openCommentsModal() {
//     var modal = document.getElementById("comments-modal");
//     modal.style.display = "flex";
// }

// function closeCommentsModal() {
//     var modal = document.getElementById("comments-modal");
//     modal.style.display = "none";
// }
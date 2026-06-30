function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields!");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>

        <button onclick="deletePost(this)">Delete</button>

        <h4>Comments</h4>
        <input type="text" class="comment-box" placeholder="Write a comment">
        <button onclick="addComment(this)">Add Comment</button>

        <div class="comments"></div>
    `;

    document.getElementById("posts").prepend(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function addComment(button) {
    const input = button.previousElementSibling;
    const commentText = input.value;

    if (commentText === "") {
        alert("Enter a comment!");
        return;
    }

    const comment = document.createElement("div");
    comment.className = "comment";
    comment.textContent = commentText;

    button.nextElementSibling.appendChild(comment);
    input.value = "";
}

function deletePost(button) {
    button.parentElement.remove();
}

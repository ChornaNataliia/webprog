// Функція для отримання коментарів
const myVar = "26";
async function loadComments() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${myVar}/comments`);
    if (!response.ok) throw new Error("Network response was not ok");

    const comments = await response.json();
    const commentsContainer = document.getElementById("comments");

    comments.forEach((comment) => {
      const commentEl = document.createElement("div");
    commentEl.classList.add("comment");

      commentEl.innerHTML = `
          <h4>${comment.name}</h4>
          <p><strong>Email:</strong> ${comment.email}</p>
          <p>${comment.body}</p>
        `;
      commentsContainer.appendChild(commentEl);
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    document.getElementById("comments").innerText = "Failed to load comments.";
  }
}

// Викликаємо функцію при завантаженні сторінки
window.addEventListener("DOMContentLoaded", loadComments);

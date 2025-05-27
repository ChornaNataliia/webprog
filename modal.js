// Модальне вікно після 1 хвилини
setTimeout(() => {
  document.getElementById("feedbackModal").style.display = "block";
}, 60000);
function closeModal() {
  document.getElementById("feedbackModal").style.display = "none";
}

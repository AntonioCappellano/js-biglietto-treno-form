const isTicketForm = document.getElementById("ticket-form");
const isNumberKm = document.getElementById("number-km");
const isUserAge = document.getElementById("user-age");
const sendBtn = document.getElementById("send-btn");
console.log(isNumberKm);
console.log(isUserAge);
console.log(sendBtn);

isTicketForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

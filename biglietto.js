const isTicketForm = document.getElementById("ticket-form");
const isNumberKm = document.getElementById("kilometre-input");
const isUserAge = document.getElementById("age-input");
const sendBtn = document.getElementById("send-btn");

console.log(isTicketForm);
console.log(isNumberKm);
console.log(isUserAge);
console.log(sendBtn);

isTicketForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const eta = isUserAge.value;
  console.log(eta);
  const kilometres = isNumberKm.value;
  console.log(kilometres);
});

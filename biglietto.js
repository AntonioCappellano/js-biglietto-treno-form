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

  const prezzoPerKm = 0.21;
  let totalPrice = kilometres * prezzoPerKm;
  if (eta < 18) {
    totalPrice = totalPrice - (totalPrice * 20) / 100;
  } else if (eta > 65) {
    totalPrice = totalPrice - (totalPrice * 40) / 100;
  }

  totalPrice = totalPrice.toFixed(2);

  console.log(`Prezzo finale: €${totalPrice}`);
});

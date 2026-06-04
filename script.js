
function submitForm() {

    const name = document.getElementById("contactName")?.value.trim();
    const email = document.getElementById("contactEmail")?.value.trim();
    const message = document.getElementById("contactMessage")?.value.trim();
    const confirm = document.getElementById("formConfirm");

 if (!name || !email || !message) {
  confirm.textContent = "Please fill in all fields.";
 confirm.style.color = "var(--error)";
 return;
 }
  confirm.textContent = `Thank you! your message is very, very, interesting.`;
  confirm.style.color = "var(--success)";

  document.getElementById("contactName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactMessage").value = "";

}
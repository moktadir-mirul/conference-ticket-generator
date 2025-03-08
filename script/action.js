const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  const imageFile = document.getElementById("avatar").files[0];
  const title = document.getElementById("title").value;
  const email = document.getElementById("email").value;
  const ticketTitle = document.getElementById("user-name");
  const ticketMail = document.getElementById("user-mail");
  const ticketImg = document.getElementById("ticket-img");
  const gitUserName = document.getElementById("git-name").value;
  const formPage = document.getElementById("form-page");
  const ticketPage = document.getElementById("ticket-page");
  const ticketPersonName = document.getElementById("ticket-person");
  const gitName = document.getElementById('ticket-gitname');
  const onTicketImage = document.getElementById('ticket-img');
  event.preventDefault();
  console.log("hello");
  console.log(imageFile);
  console.log(imageFile);
  console.log(title);
  console.log(email);
  console.log(ticketTitle);
  console.log(ticketMail);
  ticketTitle.innerText = title;
  ticketMail.innerText = email;
  ticketPersonName.innerText = title;
  gitName.innerText = gitUserName;
  const reader = new FileReader(); // Create a FileReader object

  reader.onload = function (e) {
    onTicketImage.src = e.target.result; // Set the <img> src to the file's data URL
    // ticketImg.style.display = "block"; // Make the <img> visible
  };

  reader.readAsDataURL(imageFile); // Read the file as a data URL
  // ticketImg.setAttribute('src', image)
  formPage.classList.add("hidden");
  ticketPage.classList.remove("hidden");
});

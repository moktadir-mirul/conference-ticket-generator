const form = document.querySelector("form");
document.addEventListener('DOMContentLoaded', () => {
  const dropArea = document.getElementById('input-area');
  const fileInput = document.getElementById('file-input');
  const imagePre = document.getElementById('check-img');
  const onTicketImage = document.getElementById('ticket-img');

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((item) => {
      dropArea.addEventListener(item, preventDefaults, false);
      document.body.addEventListener(item, preventDefaults, false);
  })


  dropArea.addEventListener('drop', handleDrop, false);
  dropArea.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', handleFiles, false);
  
  function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
  }


  function handleDrop (e) {
    e.preventDefault();
      let data = e.dataTransfer;
      let files = data.files;
      console.log(files, "files");
      
      handleFiles(files);
  }

  function handleFiles(files){
      const file = files[0];
      console.log(files, "handlefiles");
      console.log(file, "only file");
      
      
      const reader = new FileReader();
      if(file) {
        reader.readAsDataURL(file);
        reader.onload = function () {
          imagePre.src = reader.result;
          onTicketImage.src = reader.result;
      }
      } else {
        console.log('something wrong');
        
      }
      // reader.onload = function () {
      //     imagePre.src = reader.result;
      //     onTicketImage.src = reader.result;
      // }
  }
})


form.addEventListener("submit", function (event) {
    event.preventDefault();
  const imageFile = document.getElementById("avatar");
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
  const ticketNo = document.getElementById('ticket-no');
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


  // const reader = new FileReader(); // Create a FileReader object

  // reader.onload = function (e) {
  //   onTicketImage.src = e.target.result; // Set the <img> src to the file's data URL
    // ticketImg.style.display = "block"; // Make the <img> visible
  // };

  // reader.readAsDataURL(imageFile); // Read the file as a data URL
  // ticketImg.setAttribute('src', image)
  const number = Math.floor(Math.random()*99999);
  console.log(number);
  ticketNo.innerText = "#" + number;
  
  formPage.classList.add("hidden");
  ticketPage.classList.remove("hidden");
});

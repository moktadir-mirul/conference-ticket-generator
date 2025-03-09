const form = document.querySelector("form");

  const dropArea = document.getElementById('input-area');
  const fileInput = document.getElementById('file-input');
  const imagePre = document.getElementById('check-img');
  const onTicketImage = document.getElementById('ticket-img');

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((item) => {
      dropArea.addEventListener(item, preventDefaults, false);
      document.body.addEventListener(item, preventDefaults, false);
  })

//   ['dragenter', 'dragover'].forEach(eventName => {
//     dropArea.addEventListener(eventName, highlight, false);
// });

// Reset the drop area when the item is no longer over it
// ['dragleave', 'drop'].forEach(eventName => {
//     dropArea.addEventListener(eventName, unhighlight, false);
// });

  dropArea.addEventListener('dragenter', function() {
    dropArea.classList.add('high-light');
  }, false);
  dropArea.addEventListener('dragover', function() {
    dropArea.classList.add('high-light');
  }, false);
  dropArea.addEventListener('dragleave', unhighlight, false);
  dropArea.addEventListener('drop', unhighlight, false);

  dropArea.addEventListener('drop', handleDrop, false);
  dropArea.addEventListener('click', () => {
    fileInput.click()});

  fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files)});
  
  function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
  }

  function highlight() {
    dropArea.classList.add('high-light');
}

function unhighlight() {
    dropArea.classList.remove('high-light');
}


  function handleDrop (e) {
      e.preventDefault();
      let data = e.dataTransfer;
      let files = data.files;
      handleFiles(files);
  }

  function handleFiles(allFiles){
      console.log(arguments);
      const file = allFiles[0];
      console.log(allFiles, "handlefiles");
      console.log(file, "only file");
      
      
      const reader = new FileReader();
      if(file) {
        reader.readAsDataURL(file);
        reader.onload = function () {
          imagePre.src = reader.result;
          onTicketImage.src = reader.result;
      }
      } else {
        alert('image type wrong')
      }
      // reader.onload = function () {
      //     imagePre.src = reader.result;
      //     onTicketImage.src = reader.result;
      // }
  }



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

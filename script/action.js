const form = document.querySelector("form");

  const dropArea = document.getElementById('input-area');
  const fileInput = document.getElementById('file-input');
  const imagePre = document.getElementById('check-img');
  const onTicketImage = document.getElementById('ticket-img');
  const dragDrop = document.getElementById('drag-drop');
  const imgBtns = document.getElementById('img-btns');
  const changeBtn = document.getElementById('change-imgBtn');
  const removeBtn = document.getElementById('rmv-img');

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((item) => {
      dropArea.addEventListener(item, preventDefaults, false);
      document.body.addEventListener(item, preventDefaults, false);
  })


  dropArea.addEventListener('dragenter', highlight, false);
  dropArea.addEventListener('dragover', highlight, false);
  dropArea.addEventListener('dragleave', unhighlight, false);
  dropArea.addEventListener('drop', unhighlight, false);

  dropArea.addEventListener('drop', handleDrop, false);
  // dropArea.addEventListener('click', clickInput);

  fileInput.addEventListener('change', (e) => {
    dragDrop.classList.add('hidden');
    imgBtns.classList.remove('hidden');
    const files = e.target.files;
    handleFiles(files)});
  
  function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
  }

  function clickInput () {
    fileInput.click();
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
      dragDrop.classList.add('hidden');
      imgBtns.classList.remove('hidden');
  }
  
  let imgArr = [];

  function handleFiles(allFiles){
      console.log(arguments);
      const file = allFiles[0];
      console.log(allFiles, "handlefiles");
      console.log(file, "only file");
      imgArr.push(file);
      
    if(imgArr.length <= 0) {
        removeImage();
        return;
    }
    const reader = new FileReader();
      
        reader.readAsDataURL(imgArr[0]);
        
        reader.onload = function () {
          
          imagePre.src = reader.result;
          onTicketImage.src = reader.result;
          
     
        dropArea.removeAttribute("onClick");
      }
  }
      // reader.onload = function () {
      //     imagePre.src = reader.result;
      //     onTicketImage.src = reader.result;
      // }
      // dropArea.removeEventListener('click', clickInput);
  

  function changeImage() {
    clickInput(); 
  }
 const  removeImage = () => {
    imagePre.src = 'images/icon-upload.svg';
    onTicketImage.src = '';
    dragDrop.classList.remove('hidden');  
    imgBtns.classList.add('hidden');
    dropArea.setAttribute('onClick', 'clickInput()');
    imgArr.pop();
 }
  removeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    imagePre.src = 'images/icon-upload.svg';
    onTicketImage.src = '';
    dragDrop.classList.remove('hidden');  
    imgBtns.classList.add('hidden');
    dropArea.setAttribute('onClick', 'clickInput()');
    imgArr.pop();
    console.log(imgArr);
  })

  document.getElementById("title").addEventListener('keyup', (e) => {
    document.getElementById('title-err').classList.add('hidden');
  })

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const email = document.getElementById("email").value;
  const ticketTitle = document.getElementById("user-name");
  const ticketMail = document.getElementById("user-mail");
  const gitUserName = document.getElementById("git-name").value;
  const formPage = document.getElementById("form-page");
  const ticketPage = document.getElementById("ticket-page");
  const ticketPersonName = document.getElementById("ticket-person");
  const gitName = document.getElementById('ticket-gitname');
  const ticketNo = document.getElementById('ticket-no');
  event.preventDefault();
  ticketTitle.innerText = title;
  ticketMail.innerText = email;
  ticketPersonName.innerText = title;
  gitName.innerText = gitUserName;
  const number = Math.floor(Math.random()*99999);
  console.log(number);
  ticketNo.innerText = "#" + number;
  
  if(imgArr.length > 0) {
    if(title) {
      if(email.includes('@') && email.endsWith('.com')) {
        if(gitUserName && gitUserName.startsWith('@')) {
          formPage.classList.add("hidden");
          ticketPage.classList.remove("hidden");
        }
        else {
          document.getElementById('git-err').classList.remove('hidden');
        }
      }
      else {
        document.getElementById('email-err').classList.remove('hidden');
      }
    }
    else {
      document.getElementById('title-err').classList.remove('hidden');
    }
  }
  else{
    alert('enter your image!')
  }
});

const form = document.querySelector("form");
const dropArea = document.getElementById("input-area");
const fileInput = document.getElementById("file-input");
const imagePre = document.getElementById("check-img");
const onTicketImage = document.getElementById("ticket-img");
const dragDrop = document.getElementById("drag-drop");
const imgBtns = document.getElementById("img-btns");
const changeBtn = document.getElementById("change-imgBtn");
const removeBtn = document.getElementById("rmv-img");
let imgArr = [];

["dragenter", "dragover", "dragleave", "drop"].forEach((item) => {
  dropArea.addEventListener(item, preventDefaults, false);
  document.body.addEventListener(item, preventDefaults, false);
});

dropArea.addEventListener("dragenter", highlight, false);
dropArea.addEventListener("dragover", highlight, false);
dropArea.addEventListener("dragleave", unhighlight, false);
dropArea.addEventListener("drop", unhighlight, false);

dropArea.addEventListener("drop", handleDrop, false);

fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  handleFiles(files);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function clickInput() {
  fileInput.click();
}

function highlight() {
  dropArea.classList.add("high-light");
}

function unhighlight() {
  dropArea.classList.remove("high-light");
}

function handleDrop(e) {
  e.preventDefault();
  let data = e.dataTransfer;
  let files = data.files;
  handleFiles(files);
}

function handleFiles(allFiles) {
  const file = allFiles[0];
  imgArr.push(file);
  if (
    file.name.split(".")[1] === "jpg" ||
    file.name.split(".")[1] === "png" ||
    file.name.split(".")[1] === "jpeg" ||
    file.name.split(".")[1] === "JPG"
  ) {
    if (file.size <= 512000) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function () {
        imagePre.src = reader.result;
        onTicketImage.src = reader.result;

        dragDrop.classList.add("hidden");
        imgBtns.classList.remove("hidden");
        dropArea.removeAttribute("onClick");
      };
    } else {
      alert("Image file size too large!");
      imgArr.pop();
      dragDrop.classList.remove("hidden");
      imgBtns.classList.add("hidden");
      dropArea.setAttribute("onClick", "clickInput()");
      imagePre.src = "images/icon-upload.svg";
    }
  } else {
    alert("invalid image type");
    imgArr.pop();
    dragDrop.classList.remove("hidden");
    imgBtns.classList.add("hidden");
    dropArea.setAttribute("onClick", "clickInput()");
    imagePre.src = "images/icon-upload.svg";
  }
}

function changeImage() {
  clickInput();
}
const removeImage = () => {
  imagePre.src = "images/icon-upload.svg";
  onTicketImage.src = "";
  dragDrop.classList.remove("hidden");
  imgBtns.classList.add("hidden");
  dropArea.setAttribute("onClick", "clickInput()");
  imgArr.pop();
};
removeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  imagePre.src = "images/icon-upload.svg";
  onTicketImage.src = "";
  dragDrop.classList.remove("hidden");
  imgBtns.classList.add("hidden");
  dropArea.setAttribute("onClick", "clickInput()");
  imgArr.pop();
});

document.getElementById("title").addEventListener("keyup", () => {
  document.getElementById("title-err").classList.add("hidden");
});
document.getElementById("email").addEventListener("keyup", function () {
  document.getElementById("email-err").classList.add("hidden");
});
document.getElementById("git-name").addEventListener("keyup", function () {
  document.getElementById("git-err").classList.add("hidden");
});

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
  const gitName = document.getElementById("ticket-gitname");
  const ticketNo = document.getElementById("ticket-no");
  event.preventDefault();
  ticketTitle.innerText = title;
  ticketMail.innerText = email;
  ticketPersonName.innerText = title;
  gitName.innerText = gitUserName;
  const number = Math.floor(Math.random() * 99999);
  console.log(number);
  ticketNo.innerText = "#" + number;
  let newTitle = title.trim();
  let newMail = email.trim();
  let newGitName = gitUserName.trim();
  console.log(imgArr.length, "clicked");
  if (imgArr.length > 0) {
    if (newTitle) {
      if (newMail.includes("@") && newMail.endsWith(".com")) {
        if (newGitName && newGitName.startsWith("@")) {
          formPage.classList.add("hidden");
          ticketPage.classList.remove("hidden");
        } else {
          document.getElementById("git-err").classList.remove("hidden");
        }
      } else {
        document.getElementById("email-err").classList.remove("hidden");
      }
    } else {
      document.getElementById("title-err").classList.remove("hidden");
    }
  } else {
    alert("Enter your image!");
  }
});

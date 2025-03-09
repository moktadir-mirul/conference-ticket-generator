
// document.addEventListener('DOMContentLoaded', () => {
//     const dropArea = document.getElementById('input-area');
//     const fileInput = document.getElementById('file-input');
//     const imagePre = document.getElementById('check-img');

//     ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((item) => {
//         dropArea.addEventListener(item, preventDefaults, false);
//         document.body.addEventListener(item, preventDefaults, false);
//     })
//     let arr1 = ['dragenter', 'dragover']
//     arr1.forEach((item) => {
//         dropArea.classList.add('hover')
//     })
//     let arr2 = ['dragleave', 'drop']
//     arr2.forEach((item) => {
//         dropArea.classList.remove('hover')
//     })

//     dropArea.addEventListener('drop', handleDrop, false);
//     dropArea.addEventListener('click', () => fileInput.click());

//     fileInput.addEventListener('change', handleFiles, false);
//     function preventDefaults(e) {
//         e.preventDefault();
//         e.stopPropagation();
//     }


//     function handleDrop (e) {
//         let data = e.dataTransfer;
//         let files = data.files;
//         handleFiles(files);
//     }

//     function handleFiles(files){
//         const file = files[0];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = function () {
//             imagePre.src = reader.result;
//         }
//     }
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const dropArea = document.getElementById('drop-area');
//     const fileInput = document.getElementById('file-input');
//     const preview = document.getElementById('preview');


//     ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//         dropArea.addEventListener(eventName, preventDefaults, false);
//         document.body.addEventListener(eventName, preventDefaults, false);
//     });


//     ['dragenter', 'dragover'].forEach(eventName => {
//         dropArea.addEventListener(eventName, highlight, false);
//     });


//     ['dragleave', 'drop'].forEach(eventName => {
//         dropArea.addEventListener(eventName, unhighlight, false);
//     });


//     dropArea.addEventListener('drop', handleDrop, false);
//     dropArea.addEventListener('click', () => fileInput.click());

//     fileInput.addEventListener('change', handleFiles, false);

//     function preventDefaults(e) {
//         e.preventDefault();
//         e.stopPropagation();
//     }

//     function highlight() {
//         dropArea.classList.add('hover');
//     }

//     function unhighlight() {
//         dropArea.classList.remove('hover');
//     }

//     function handleDrop(e) {
//         const dt = e.dataTransfer;
//         const files = dt.files;
//         handleFiles(files);
//     }

//     function handleFiles(files) {
//         const file = files[0];


//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = function() {
//                 preview.src = reader.result;
//                 preview.style.display = 'block';
//             };
//         }
//     }
// });

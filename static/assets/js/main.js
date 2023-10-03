// Get references to elements
const uploadButton = document.getElementById('upload-button');
const uploadForm = document.getElementById('upload-form');
const imageUpload = document.getElementById('image-upload');
const caption = document.getElementById('caption');
const postButton = document.getElementById('post-button');

// Function to hide the form
const hideUploadForm = () => {
  uploadForm.style.display = 'none';
};

// Toggle form visibility when the button is clicked
uploadButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click event from reaching the body
  uploadForm.style.display = 'block';
});

// Handle form submission (you can customize this part)
postButton.addEventListener('click', () => {


  // After posting, hide the form
  hideUploadForm();
});

// Add a click event listener to the document body to hide the form
document.body.addEventListener('click', hideUploadForm);

// Prevent the form from closing when clicking inside the form itself
uploadForm.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click event from reaching the body
});


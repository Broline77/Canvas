function expandImage(image) {
    // Create a new div for the expanded image
    const expandedDiv = document.createElement('div');
    expandedDiv.className = 'expanded';
  
    // Create an image element inside the expanded div
    const expandedImage = document.createElement('img');
    expandedImage.src = image.src;
    expandedDiv.appendChild(expandedImage);
  
    // Add a click event to close the expanded image when clicked
    expandedDiv.addEventListener('click', function () {
      document.body.removeChild(this);
    });
  
    // Append the expanded div to the body
    document.body.appendChild(expandedDiv);
  }
  
  
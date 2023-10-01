// Get the profile icon and popup elements
const profileIcon = document.getElementById('profile-icon');
const popup = document.getElementById('popup');

// Function to toggle the popup
function togglePopup() {
    popup.classList.toggle('show');
}

// Event listener for the profile icon click
profileIcon.addEventListener('click', togglePopup);

// Close the popup when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target !== profileIcon && event.target !== popup) {
        popup.classList.remove('show');
    }
});

// Prevent clicks inside the popup from closing it
popup.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Add functionality to the "Account Settings" link (replace with your desired URL)
const accountSettingsLink = document.getElementById('account-settings');
accountSettingsLink.addEventListener('click', function (event) {
    // Redirect to the account settings page or perform any other desired action
    // Example: window.location.href = '/account-settings';
});

// Add functionality to the "Logout" link (replace with your desired URL or logout logic)
const logoutLink = document.getElementById('logout');
logoutLink.addEventListener('click', function (event) {
    // Perform logout logic (e.g., clear user session, redirect to login page, etc.)
    // Example: window.location.href = '/logout';
});

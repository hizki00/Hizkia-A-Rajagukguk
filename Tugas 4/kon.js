// Set profile button as active on page load
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.querySelector('[href="#profile"]');
    if (profileBtn) {
        profileBtn.classList.add('active');
    }
});
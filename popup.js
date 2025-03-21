const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

if (status === 'success') {
    const popup = document.getElementById('success-popup');
    popup.style.display = 'block';
    popup.style.animationName = 'popup-appear';
    setTimeout(function() {
        popup.style.animationName = 'popup-disappear';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 1000); 
    }, 3000);
} else if (status === 'error') {
    const popup = document.getElementById('error-popup');
    popup.style.display = 'block';
    popup.style.animationName = 'popup-appear';
    setTimeout(function() {
        popup.style.animationName = 'popup-disappear';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 1000);
    }, 3000); 
}

document.querySelector('.dropdown-button').addEventListener('click', function() {
document.querySelector('.dropdown-content').classList.toggle('show');
});
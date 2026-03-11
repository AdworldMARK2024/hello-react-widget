document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.gh-cdn-button');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Hello from GitHub CDN!');
        });
    }
});

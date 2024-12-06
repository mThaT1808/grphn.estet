document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.door__mark-like').forEach(function(container) {
        container.addEventListener('click', function() {
            const icon = this.querySelector('i');

            icon.classList.toggle('icon-heart');
            icon.classList.toggle('icon-heart-fill');
        });
    });
});
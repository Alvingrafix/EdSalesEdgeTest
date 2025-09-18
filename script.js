document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const pages = document.querySelectorAll('.page');

    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId.substring(1)) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    const initialPage = window.location.hash || '#home';
    showPage(initialPage);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href');
            window.history.pushState({}, '', pageId);
            showPage(pageId);
        });
    });
});

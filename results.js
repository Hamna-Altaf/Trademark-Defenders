document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = 3;

    const pageNumberButtons = document.querySelectorAll('.pagination-buttons .page-button');
    const nextButton = document.querySelector('.pagination-buttons .next');
    const testimonialPages = document.querySelectorAll('.testimonial-page');

    function showPage(pageNumber) {
        if (pageNumber < 1 || pageNumber > totalPages) {
            return;
        }

        currentPage = pageNumber;

        testimonialPages.forEach((page, index) => {
            page.classList.toggle('active', index === pageNumber - 1);
        });

        pageNumberButtons.forEach(button => {
            if (parseInt(button.dataset.page) === currentPage) {
                button.classList.add('active-page');
            } else {
                button.classList.remove('active-page');
            }
        });

        window.scrollTo(0, 0);
    }

    function nextPage() {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        } else {
            showPage(1);
        }
    }

    pageNumberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageNumber = parseInt(button.dataset.page);
            showPage(pageNumber);
        });
    });

    if (nextButton) {
        nextButton.addEventListener('click', nextPage);
    }
    

    showPage(currentPage);
});

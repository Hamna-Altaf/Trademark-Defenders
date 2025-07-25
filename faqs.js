
    const faqBlocks = document.querySelectorAll('.FAQs-block');

    faqBlocks.forEach(block => {
        const toggle = block.querySelector('.toggle-icon');
        toggle.addEventListener('click', () => {
            block.classList.toggle('active');
        });
    });



    const faqBlocks = document.querySelectorAll('.FAQs-block');

    faqBlocks.forEach(block => {
        const toggle = block.querySelector('.FAQs-item');
        toggle.addEventListener('click', () => {
            block.classList.toggle('active');
        });
    });


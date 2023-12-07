// Projets
let bookCards = [...document.querySelectorAll('.book-card')];

// Filtres
const filters = [...document.querySelectorAll('.filter-btn')];

filters.map((btn, i) => {
    btn.addEventListener('click', () => {
        filters.map(item => item.classList.remove('active'));

        btn.classList.add('active');

        let tag = btn.getAttribute('data-filter-value');

        bookCards.map((book, i) => {
            book.classList.remove('pasvisible')
            if (tag == 'all') {
                if (i >= 4 && i <= 15) {
                    book.style.display = 'none';

                }
                if (i >= 20 && i <= 32) {
                book.style.display = 'none';

                }

            } else if (!book.getAttribute('data-tags').includes(tag)) {
                book.style.display = 'none';
            } else {
                book.style.display = null;
            }
        })
    })
})
const pages = document.querySelectorAll('.page');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentPage = 0;

function updatePage() {
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === currentPage) {
            page.classList.add('active');
        }
    });

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === pages.length - 1;
}

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

updatePage();

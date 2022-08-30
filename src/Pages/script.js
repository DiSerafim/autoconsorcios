let classPreview = document.querySelector('.preview');
let classPreviewCard = document.querySelectorAll('.preview-card');

// abre o card ao clicar, adicionando active a sua classe
document.querySelectorAll('.products-container .card').forEach(open => {
    open.onclick = () => {
        classPreview.style.display = 'flex';
        let name = open.getAttribute('data-name');
        classPreviewCard.forEach(previewCard => {
            let target = previewCard.getAttribute('data-target');
            if (name === target) {
                previewCard.classList.add('active');
            }
        });
    }
});

classPreviewCard.forEach(close => {
    close.querySelector('.fechar').onclick = () => {
        close.classList.remove('active');
        classPreview.style.display = 'none';
    };
});

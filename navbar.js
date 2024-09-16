document.addEventListener('DOMContentLoaded', function () {
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    const offcanvasToggle = document.getElementById('offcanvasToggle');
    const offcanvasClose = document.getElementById('offcanvasClose');

    // Open the offcanvas menu
    offcanvasToggle.addEventListener('click', function () {
        offcanvasMenu.classList.add('open');
    });

    // Close the offcanvas menu
    offcanvasClose.addEventListener('click', function () {
        offcanvasMenu.classList.remove('open');
    });

    // Close the offcanvas if user clicks outside it
    document.addEventListener('click', function (e) {
        if (!offcanvasMenu.contains(e.target) && !offcanvasToggle.contains(e.target)) {
            offcanvasMenu.classList.remove('open');
        }
    });
});


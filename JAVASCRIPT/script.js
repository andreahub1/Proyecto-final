document.addEventListener("DOMContentLoaded", function () {
    function setupLoadMore(buttonId, containerClass, boxClass) {
        let loadMoreBtn = document.querySelector(`#${buttonId}`);
        if (!loadMoreBtn) return; // Verifica que el botón exista antes de continuar

        let currentItem = 4;
        let boxes = [...document.querySelectorAll(`.${containerClass} .${boxClass}`)];

        boxes.slice(currentItem).forEach(box => box.style.display = "none");

        loadMoreBtn.onclick = () => {
            for (let i = currentItem; i < currentItem + 4 && i < boxes.length; i++) {
                boxes[i].style.display = 'inline-block';
            }
            currentItem += 4;
            if (currentItem >= boxes.length) {
                loadMoreBtn.style.display = 'none';
            }
        };
    }

    setupLoadMore("load-more-1", "box-container-1", "box-1");
    setupLoadMore("load-more-2", "box-container-2", "box-2");
    setupLoadMore("load-more-3", "box-container-3", "box-3");

    // Redirigir al hacer clic en la imagen de reproducción
    let playButton = document.querySelector(".header-2 img");
    if (playButton) {
        playButton.addEventListener("click", function () {
            window.open("https://www.youtube.com/watch?v=jcTP9BvoW1o&t=3s", "_blank");
        });
    }

    // Redirigir al hacer clic en el botón de Login
    let loginButton = document.querySelector(".btn-1");
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }

});


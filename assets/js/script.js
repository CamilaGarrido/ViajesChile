$(document).ready(function () {
    $(".scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });
});

// tooltips 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// clic en el botón de enviar
document.getElementById("btn-enviar").addEventListener("click", function () {
    // ventana emergente con mensaje
    alert("Tu mensaje fue enviado correctamente");
});

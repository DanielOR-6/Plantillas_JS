$(function() {
    $(document).on("click", function(evt) {
        const element = evt.target;
        const selector = "modal-window";
        if (element.classList.contains(selector)) {
            $(".modal-window").remove();
        }
    });
});


function dorModalWindow(mapa) {
    const html = mapa.html;
    
    const modalWindowClose = $("<span>", {
        class: "material-symbols-outlined modal-window-close",
        text: "close",
    });

    const modalWindow = $("<div>", {
        class: "modal-window",
    });
    const modalWindowContent = $("<div>", {
        class: "modal-window-content",
        html: html,
    });

    modalWindowClose.on("click", function() {
        modalWindow.remove();
    });

    modalWindowContent.append(modalWindowClose);
    modalWindow.append(modalWindowContent);

    $("body").prepend(modalWindow);
}
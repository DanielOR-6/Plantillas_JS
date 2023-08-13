$(function() {
    $(document).on("click", function(evt) {
        const element = evt.target;
        const selector = "dropdown-selector";
        if (!element.classList.contains(selector) && 
            (element.parentElement && !element.parentElement.classList.contains(selector))) { 
            $(".dropdown-menu-container").addClass("hidden");
            $(".dropdown-selector").removeClass("selected");
        }
    });
});

function dorDropdown(domElement, mapa) {
    const items = mapa.items;
    const icon = mapa.icon;
    const iconSelected = mapa.iconSelected;

    const dropdownSelectorIcon = $("<span>", {
        class: "material-symbols-outlined",
        text: icon,
    });

    const dropdownSelector = $("<div>", {
        class: "dropdown-selector",
    });

    dropdownSelector.on("click", function() {
        const selected = $(this).hasClass("selected");
        console.log(selected);
        $(".dropdown-selector").removeClass("selected");
        $(".dropdown-menu-container").addClass("hidden");
        if (selected) {
            $(this).removeClass("selected");
            dropdownSelectorIcon.text(icon),
            $(this).siblings(".dropdown-menu-container").addClass("hidden");
            } else {
            $(this).addClass("selected");
            dropdownSelectorIcon.text(iconSelected),
            $(this).siblings(".dropdown-menu-container").removeClass("hidden");
        }
    });
    
    const dropdownMenuContainer = $("<div>", {
        class: "dropdown-menu-container hidden",
    });

    items.forEach(function (el) {
        const dropdownMenuItemIcon = $("<span>", {
            class: "material-symbols-outlined",
            text: el.icon
        });
        const dropdownMenuItem = $("<a>", {
            class: "dropdown-menu-item ",
            text: el.text,
            href: el.href,
        });
        dropdownMenuItem.on("click", el.onClick);
        dropdownMenuItem.prepend(dropdownMenuItemIcon);
        dropdownMenuContainer.append(dropdownMenuItem);
    });

    dropdownSelector.append(dropdownSelectorIcon);

    $(domElement).addClass("dropdown");
    $(domElement).append(dropdownSelector);
    $(domElement).append(dropdownMenuContainer);
}
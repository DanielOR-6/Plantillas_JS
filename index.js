$(function() {
    $(".my-dropdown").each(function() {
        dorDropdown("#" + $(this).attr("id"), {
            items: [
                {text: "Menu Option 1", href: "#menu-1", icon: "info", onClick: () => dorModalWindow({
                    html: `This is an html`,
                })},
                {text: "Menu Option 2", href: "#menu-2", icon: "help", onClick: () => dorModalWindow({
                    html: `
                        <span>This is a span</span>
                    `,
                })},
                {text: "Menu Option 3", href: "#menu-3", icon: "language", onClick: () => dorModalWindow({
                    html: `
                        <ul>
                            <li>List 1</li>
                            <li>List 2</li>
                            <li>List 3</li>
                            <li>List 4</li>
                        </ul>
                    `,
                })},
                {text: "Menu Option 4", href: "#menu-4", icon: "verified", onClick: () => dorModalWindow({
                    html: `
                        <span class="material-symbols-outlined">favorite</span>
                    `,
                })},
            ],
            icon: "expand_more",
            iconSelected: "expand_less",
        });
    });
});
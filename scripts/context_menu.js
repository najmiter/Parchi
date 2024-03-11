const menu = document.getElementById("menu");

function handle_contextmenu(click) {
    click.preventDefault();

    const menu_width = 112;
    const menu_height = 144;

    menu.style.display = "flex";
    menu.style.left = `${
        click.clientX + menu_width > window.innerWidth
            ? click.clientX - menu_width
            : click.clientX
    }px`;
    menu.style.top = `${
        click.clientY + menu_height > window.innerHeight
            ? click.clientY - menu_height
            : click.clientY
    }px`;

    clicked_item = +click.target.getAttribute("aria-id");

    revalidate_rows(clicked_item, false);
}

function hide_contextmenu_and_revalidate() {
    menu.style.display = "none";
    revalidate_rows();
}

const menu = document.getElementById("menu");

function handle_contextmenu(click) {
    click.preventDefault();
    full_items_opacity();

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

    dim_other_items(clicked_item);
}

function hide_contextmenu_and_revalidate() {
    menu.style.display = "none";
    full_items_opacity();
}

function dim_other_items(id) {
    const items = document.querySelectorAll(".item");

    items.forEach((item, i) => {
        if (i !== id) {
            item.style.opacity = 0.3;
        }
    });
}

function full_items_opacity() {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => (item.style.opacity = 1));
}

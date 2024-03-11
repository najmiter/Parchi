if (!navigator.userAgent.includes("Chrome")) {
    document.querySelector(".background-blur").style.display = "none";
}

document.addEventListener("click", function (click) {
    if (!menu.contains(click.target)) hide_contextmenu_and_revalidate();
});

document.addEventListener("keydown", function (key) {
    if (key.code === "Escape") hide_contextmenu_and_revalidate();
});

// it's already checked inside but idk
if (Parchi.length === 0) {
    toggle_items_visibility();
}

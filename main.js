if (!navigator.userAgent.includes("Chrome")) {
    document.querySelector(".background-blur").style.display = "none";
}

if (Parchi.length === 0) {
    toggle_items_visibility();
}

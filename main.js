if (!navigator.userAgent.includes("Chrome")) {
    document.querySelector(".background-blur").style.display = "none";
}

// it's already checked inside but idk
if (Parchi.length === 0) {
    toggle_items_visibility();
}

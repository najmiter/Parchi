const hide_adder_btn = document.getElementById("hide-adder");

hide_adder_btn.addEventListener("click", () => {
    const header = document.querySelector("header");
    const is_hidden = header.classList.contains("none");

    const delay = is_hidden ? 0 : 1000;

    hide_adder_btn.textContent = !is_hidden ? "Add More" : "Start Buying";

    if (is_hidden) {
        header.classList.add("animate-in");
        header.classList.remove("animate-away");
    } else {
        header.classList.remove("animate-in");
        header.classList.add("animate-away");
    }

    setTimeout(() => {
        if (is_hidden) {
            header.classList.remove("none");
            header.classList.add("flex");
        } else {
            header.classList.remove("flex");
            header.classList.add("none");
        }
    }, delay);
});

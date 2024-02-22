const share_btn = document.getElementById("share-btn");

share_btn.addEventListener("click", () => {
    if (Parchi.length) {
        const url = new URL(window.location);
        const search = new URLSearchParams(url.search);

        // clear the previous
        if (search.get("Parchi")) search.delete("Parchi");

        const items = [];

        Parchi.forEach(({ name, quantity, been_bought }) => {
            const item = `${name}-${quantity}-${Number(been_bought)}`;
            items.push(item);
        });

        search.append("Parchi", items.join("_"));
        url.search = search.toString();
        history.pushState({}, "", url.toString());

        toggle_popup("Link copied ✓", "var(--success-color)");

        // copy the 'unique' url
        navigator.clipboard.writeText(window.location.href);
    } else {
        toggle_popup("Please add some items first", "var(--warning-color)");
    }
});

function toggle_popup(msg, color) {
    const pop_up_msg = document.getElementById("pop-up-msg");
    pop_up_msg.style.display = "block";
    pop_up_msg.style.color = color;
    pop_up_msg.textContent = msg;

    pop_up_msg.classList.remove("popdown");
    pop_up_msg.classList.add("popup");

    setTimeout(() => {
        pop_up_msg.classList.remove("popup");
        pop_up_msg.classList.add("popdown");
        pop_up_msg.style.display = "none";
    }, 700);
}

const share_btn = document.getElementById("share-btn");

share_btn.addEventListener("click", () => {
    if (Parchi.length) {
        const url = new URL(window.location);
        const search = new URLSearchParams(url.search);

        if (search.get("Parchi")) search.delete("Parchi");

        const items = [];

        Parchi.forEach(({ name, quantity, been_bought }) => {
            const item = `${name}-${quantity}-${Number(been_bought)}`;
            items.push(item);
        });
        search.append("Parchi", items.join("_"));
        url.search = search.toString();
        history.pushState({}, "", url.toString());

        navigator.clipboard.writeText(window.location.href);
    }
});

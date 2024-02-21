const share_btn = document.getElementById("share-btn");

share_btn.addEventListener("click", () => {
    if (Parchi.length) {
        const url = new URL(window.location);
        const search = new URLSearchParams(url.search);

        if (!search.get("Parchi")) {
            const items = [];

            Parchi.forEach(({ name, quantity, been_bought }) => {
                const item = `${name.replaceAll(" ", "%20%")}-${quantity}-${Number(been_bought)}`;
                items.push(item);
            });
            search.append("Parchi", items.join("_"));
            url.search = search.toString();
            history.pushState({}, "", url.toString());

            const args = search.get("Parchi");
            console.log(args.split("_").join(" "));
        }
    }
});

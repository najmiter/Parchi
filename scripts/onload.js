const url = new URL(window.location);
const search = new URLSearchParams(url.search);

if (search.get("Parchi")) {
    const args = search.get("Parchi");
    localStorage.setItem("Parchi", undefined);
    Parchi.length = 0;

    const items = args.split("_");
    for (const item of items) {
        const [n, q, b] = item.split("-");

        Parchi.push(
            ParchiItem(n.replaceAll("%s%", " "), q, b === "0" ? false : true)
        );
    }

    write_localStorage();
}

revalidate_rows();

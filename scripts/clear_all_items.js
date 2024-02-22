const clear_all_btn = document.getElementById("clear-all-btn");

clear_all_btn.addEventListener("click", () => {
    const ok = confirm("Are you sure you want to clear the list?");

    if (ok) {
        const url = new URL(window.location);
        const search = new URLSearchParams(url.search);
        search.delete("Parchi");
        url.search = search.toString();
        history.pushState({}, "", url.toString());

        Parchi.length = 0;
        localStorage.setItem("Parchi", undefined);
        toggle_items_visibility();
        write_localStorage();
        revalidate_rows();
    }
});

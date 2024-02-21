const clear_all_btn = document.getElementById("clear-all-btn");
clear_all_btn.addEventListener("click", () => {
    const ok = confirm("Are you sure you want to clear the list?");
    if (ok) {
        Parchi.length = 0;
        localStorage.setItem("Parchi", undefined);
        toggle_items_visibility();
        write_localStorage();
        revalidate_rows();
    }
});

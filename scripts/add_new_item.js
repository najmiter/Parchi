const add_item_btn = document.getElementById("add-item-btn");

add_item_btn.addEventListener("click", () => {
    const name = item_input.value.trim();
    const quantity = +item_quantity.value;

    if (name && quantity > 0) {
        const new_item = {
            name,
            quantity,
            been_bought: false,
        };

        Parchi.unshift(new_item);

        toggle_popup("Item added successfully ✓", "var(--success-color)");

        toggle_items_visibility();
        write_localStorage();
        revalidate_rows(false);
    } else {
        toggle_popup("Invalid inputs", "var(--danger-color)");
    }

    item_input.value = "";
    item_quantity.value = "";
});

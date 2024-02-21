const add_item_btn = document.getElementById("add-item-btn");
add_item_btn.addEventListener("click", () => {
    const item_input = document.getElementById("item-input-name");
    const item_quantity = document.getElementById("item-input-quantity");

    const name = item_input.value.trim();
    const quantity = +item_quantity.value;

    if (name && quantity > 0) {
        const new_item = {
            name,
            quantity,
            been_bought: false,
        };

        Parchi.unshift(new_item);
        write_localStorage();
        revalidate_rows(false);
    }

    item_input.value = "";
    item_quantity.value = "";
});

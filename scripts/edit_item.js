const edit_item = document.getElementById("edit-item");

edit_item.addEventListener("click", function () {
    menu.style.display = "none";

    if (!Parchi[clicked_item].been_bought) {
        item_input.value = Parchi[clicked_item].name;
        item_quantity.value = Parchi[clicked_item].quantity;
        Parchi.splice(clicked_item, 1);

        write_localStorage();
    }

    revalidate_rows(-1, false);
    clicked_item = -1;
});

const remove_item = document.getElementById("remove-item");

remove_item.addEventListener("click", function () {
    menu.style.display = "none";

    Parchi.splice(clicked_item, 1);

    write_localStorage();
    revalidate_rows();

    clicked_item = -1;
});

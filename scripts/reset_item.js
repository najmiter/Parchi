const reset_item = document.getElementById("reset-item");

reset_item.addEventListener("click", function () {
    menu.style.display = "none";
    mark_item_unbought(clicked_item);
});

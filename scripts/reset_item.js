const reset_item = document.getElementById("reset-item");

reset_item.addEventListener("click", function (item) {
    menu.style.display = "none";
    mark_item_unbought(item);
});
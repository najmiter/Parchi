const thead = document.querySelector("tbody");

function ParchiItem(name, quantity, been_bought = false) {
    return {
        name,
        quantity,
        been_bought,
    };
}

const Parchi = [
    ParchiItem("soap", 5, true),
    ParchiItem("flowers", 10, true),
    ParchiItem("mobile cards", 5),
];

function revalidate_rows() {
    thead.innerHTML = "";
    Parchi.sort((item) => (item.been_bought ? 1 : -1));

    for (const [i, item] of Parchi.entries()) {
        thead.appendChild(create_row_item(item, i));
    }
}

function create_row_item({ name, quantity, been_bought }, i) {
    function create_row(klass, data) {
        const td = document.createElement("td");
        td.setAttribute("class", klass);
        td.textContent = data;

        return td;
    }

    const item = document.createElement("tr");
    item.setAttribute("class", "item");

    const new_item = create_row("item-name", name);
    new_item.setAttribute("aria-id", i);
    item.appendChild(new_item);

    new_item.addEventListener("click", (item_) => {
        const id = +item_.target.getAttribute("aria-id");

        if (!Parchi[id].been_bought) {
            Parchi[id].been_bought = true;
            revalidate_rows();
        }
    });

    item.appendChild(create_row("item-quantity", quantity));
    item.appendChild(
        create_row(
            `item-been-bought ${been_bought ? "item-been-bought-yes" : ""}`,
            been_bought ? "✓" : "×"
        )
    );

    return item;
}

const add_item_btn = document.getElementById("add-item-btn");
add_item_btn.addEventListener("click", () => {
    const item_input = document.getElementById("item-input-name");
    const item_quantity = document.getElementById("item-input-quantity");

    const name = item_input.value.trim();
    const quantity = +item_quantity.value;

    if (name) {
        const new_item = {
            name,
            quantity,
            been_bought: false,
        };

        Parchi.unshift(new_item);
        revalidate_rows();
    }

    item_input.value = "";
    item_quantity.value = 1;
});

for (const [i, item] of Parchi.entries()) {
    thead.appendChild(create_row_item(item, i));
}

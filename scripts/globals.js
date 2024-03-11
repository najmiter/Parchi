const thead = document.querySelector("tbody");
const Parchi = [];
let clicked_item = -1;

function revalidate_rows(sort = true) {
    thead.innerHTML = "";

    if (!read_localStorage()) {
        update_guide_msg(get_guide_msg(0));
        return;
    }

    toggle_items_visibility();

    if (sort) Parchi.sort((item) => (item.been_bought ? 1 : -1));

    for (const [i, item] of Parchi.entries()) {
        thead.appendChild(create_row_item(item, i));
    }

    const details = document.getElementById("details");
    const items_count = Parchi.length;
    const bought_count = Parchi.reduce(
        (c, item) => (item.been_bought ? c + 1 : c),
        0
    );

    details.textContent = items_count
        ? `You have bought ${bought_count} items out of ${items_count}`
        : "";

    const msg = get_guide_msg(items_count, bought_count);

    update_guide_msg(msg);
}

function get_guide_msg(items_count, bought_count) {
    return items_count === 0
        ? guide_msgs.empty
        : bought_count < items_count
          ? guide_msgs.bought_some_or_none
          : guide_msgs.bought_all;
}

function ParchiItem(name, quantity, been_bought = false) {
    return {
        name,
        quantity,
        been_bought,
    };
}

function read_localStorage() {
    if (localStorage.getItem("Parchi")) {
        const local_parchi = JSON.parse(localStorage.getItem("Parchi"))?.Parchi;
        Parchi.length = 0;

        for (const key of Object.keys(local_parchi)) {
            const { name, quantity, been_bought } = local_parchi[key];
            Parchi.push(ParchiItem(name, quantity, been_bought));
        }

        return Parchi;
    }

    return null;
}

function write_localStorage() {
    const local_parchi = {
        Parchi: {},
    };

    for (const [at, item] of Parchi.entries()) {
        local_parchi.Parchi[at] = { ...item };
    }

    localStorage.setItem(`Parchi`, JSON.stringify(local_parchi));
}

const guide_msgs = {
    empty: "Start adding new items 🤑",
    bought_some_or_none: "Click the item to mark it down 🤝",
    bought_all: "Yay! You bought everything 🥳",
};

function update_guide_msg(msg) {
    const guide_msg = document.getElementById("guide-msg");

    guide_msg.textContent = msg;
}

function create_row_item({ name, quantity, been_bought }, i) {
    function create_row(klass, data) {
        const td = document.createElement("td");
        td.setAttribute("class", klass);
        td.setAttribute("aria-id", i);
        td.textContent = data;

        return td;
    }

    const item = document.createElement("tr");
    item.setAttribute("class", "item");

    item.addEventListener("contextmenu", handle_contextmenu);
    item.addEventListener("click", mark_item_bought);

    item.appendChild(create_row("item-name", name));
    item.appendChild(create_row("item-quantity", quantity));
    item.appendChild(
        create_row(
            `item-been-bought ${been_bought ? "item-been-bought-yes" : ""}`,
            been_bought ? "✓" : "×"
        )
    );

    return item;
}

function mark_item_bought(item) {
    const id = +item.target.getAttribute("aria-id");

    if (!Parchi[id].been_bought) {
        Parchi[id].been_bought = true;
        write_localStorage();
        revalidate_rows();
    }
}

function mark_item_unbought() {
    const id = clicked_item;

    if (Parchi[id].been_bought) {
        Parchi[id].been_bought = false;
        write_localStorage();
        revalidate_rows();
    }

    clicked_item = -1;
}

function toggle_items_visibility() {
    const table = document.querySelector(".items");
    table.style.display = Parchi.length === 0 ? "none" : "table";
}

function revalidate_rows(sort = true) {
    thead.innerHTML = "";

    if (!read_localStorage()) return;

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

    const msg =
        items_count === 0
            ? guide_msgs.empty
            : bought_count < items_count
              ? guide_msgs.bought_some_or_none
              : guide_msgs.bought_all;

    update_guide_msg(msg);
}

revalidate_rows();

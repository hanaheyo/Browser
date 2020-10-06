function getInputValue() {
    const list = document.querySelector(".container");
    let item = document.createElement("div");
    let inputVal = document.querySelector("input").value;
    item.setAttribute("class", "item");
    item.innerHTML = `
    <span>${inputVal}</span>
    <i class="fas fa-trash-alt" onclick="removeItem(this);"></i>
    `
    list.appendChild(item);
    document.querySelector("input").value = " ";
};

function removeItem(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
};

function enter() {
    if (window.event.keyCode == 13) {
        getInputValue();
    }
};
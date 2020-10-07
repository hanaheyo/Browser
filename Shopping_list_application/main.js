function getInputValue() {
    const list = document.querySelector(".container");
    // 1. 사용자가 입력한 텍스트를 받아온다
    let inputVal = document.querySelector("input").value;
    // 2. 새로운 아이템을 만든다.
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    item.innerHTML = `
    <span>${inputVal}</span>
    <i class="fas fa-trash-alt" onclick="removeItem(this);"></i>
    `
    // 3. list에 새로 만든 아이템을 추가한다.
    list.appendChild(item);
    //4. input을 초기화한다.
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
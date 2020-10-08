const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;
    if (text === '') {
        input.focus();
        return; // text 값이 없으면 onAdd 함수를 나간다!
    }
    // 2. 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. input을 초기화한다.
    input.value = "";
    input.focus();
}
let id = 0; // 아이디로 integer를 쓰는 것은 좋지 않음. UUID와 같은 고유한 ID를 쓰는 것이 좋음.
function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");
    itemRow.setAttribute("data-id", id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>`;
    id++;
    return itemRow;
}

addBtn.addEventListener("click", () => {
    onAdd();
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        onAdd();
    }
});
//event delegation
items.addEventListener("click", event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});
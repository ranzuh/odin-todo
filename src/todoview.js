export function createTodoElement(todoTitle) {
    const div = document.createElement("div");
    div.classList.add("todo-item");
    const input = document.createElement("input");
    input.type = "checkbox";
    const p = document.createElement("p");
    p.textContent = todoTitle;

    div.appendChild(input);
    div.appendChild(p);

    return div;
}

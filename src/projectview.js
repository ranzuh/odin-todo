export function createProjectElement(projectName, isCurrentProject, projectClickCallback) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("project-item");
    const label = document.createElement("label");
    label.textContent = projectName;
    const button = document.createElement("button");
    button.textContent = "Edit";

    if (isCurrentProject) label.style.textDecoration = "underline";

    label.addEventListener("click", projectClickCallback);

    div.appendChild(label);
    div.appendChild(button);
    li.appendChild(div);

    return li;
}

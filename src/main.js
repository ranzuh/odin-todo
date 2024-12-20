import "./styles.css"
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoApp } from "./todoapp";

const UIController = (function (){
    const todoContainer = document.getElementById("todo-container");
    const titleElement = document.getElementById("current-project-title");
    const projectList = document.getElementById("project-list");

    const app = new TodoApp();
    let exampleProject = new Project("Example Project");
    app.addProject(exampleProject);

    let exampleTodo = new Todo("Clean kitchen", "Clean the kitchen", "Today", "High", false);
    exampleProject.addTodo(exampleTodo);

    function update() {
        titleElement.textContent = app.defaultProject.name;

        renderProjectList()
    }

    function renderProjectList() {
        projectList.innerHTML = "";

        const ul = projectList.appendChild(document.createElement("ul"));

        app.projects.forEach(project => {
            const li = document.createElement("li");
            const div = document.createElement("div");
            div.classList.add("project-item");
            const a = document.createElement("a");
            a.textContent = project.name;
            const button = document.createElement("button");
            button.textContent = "Edit";

            div.appendChild(a);
            div.appendChild(button);
            li.appendChild(div);

            ul.appendChild(li);
        });
    }

    update();

})();
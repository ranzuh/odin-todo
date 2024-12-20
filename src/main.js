import "./styles.css"
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoApp } from "./todoapp";

const UIController = (function (){
    const todoContainer = document.getElementById("todo-container");
    const titleElement = document.getElementById("current-project-title");
    const projectList = document.getElementById("project-list");
    const taskModal = document.getElementById("dialog");

    const app = new TodoApp();
    let exampleProject = new Project("Example Project");
    app.addProject(exampleProject);

    let exampleTodo = new Todo("Clean kitchen", "Clean the kitchen", "Today", "High", false);
    exampleProject.addTodo(exampleTodo);

    exampleTodo = new Todo("This is a title", "", "", "", false);

    app.currentProject.addTodo(exampleTodo);

    console.log("Here again...");

    document.getElementById("new-task-btn").addEventListener("click", () => {
        taskModal.showModal();
    });

    document.getElementById("modal-cancel").addEventListener("click", () => {
        taskModal.close();
    });

    document.getElementById("modal-add").addEventListener("click", () => {
        taskModal.close()

        const inputTask = document.getElementById("task-input");
        const newTodo = new Todo(inputTask.value, "", "", "", false);
        app.currentProject.addTodo(newTodo);
        inputTask.value = "";

        update();
    });



    function update() {
        titleElement.textContent = app.currentProject.name;
        renderProjectList()
        renderTodoList()
    }

    function renderProjectList() {
        projectList.innerHTML = "";

        const ul = projectList.appendChild(document.createElement("ul"));

        function handleProjectClick(event) {
            const clickedProjectName = event.target.textContent;
            app.setCurrentProject(clickedProjectName);
            update();
        }

        app.projects.forEach(project => {
            const li = document.createElement("li");
            const div = document.createElement("div");
            div.classList.add("project-item");
            const label = document.createElement("label");
            label.textContent = project.name;
            const button = document.createElement("button");
            button.textContent = "Edit";

            if (project === app.currentProject) {
                label.style.textDecoration = "underline";
            }

            label.addEventListener("click", handleProjectClick);

            div.appendChild(label);
            div.appendChild(button);
            li.appendChild(div);

            ul.appendChild(li);
        });
    }

    function renderTodoList() {
        todoContainer.innerHTML = "";

        app.currentProject.todos.forEach(todo => {
            const div = document.createElement("div");
            div.classList.add("todo-item");
            const input = document.createElement("input");
            input.type = "checkbox";
            const p = document.createElement("p");
            p.textContent = todo.title;

            div.appendChild(input);
            div.appendChild(p);

            todoContainer.appendChild(div);
        });
        

    }

    update();

})();
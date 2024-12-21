import "./styles.css"
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoApp } from "./todoapp";
import { SetupAddModal } from "./modal";
import { createProjectElement } from "./projectview";
import { createTodoElement } from "./todoview";

const myTodos = [
    "Editing and removing existing projects",
    "Editing and removing existing todos",
    "Add due dates",
    "Add priority to tasks",
    "Add persistence using the Web Storage API",
];

const UIController = (function (){
    // get elements
    const todoContainer = document.getElementById("todo-container");
    const titleElement = document.getElementById("current-project-title");
    const projectList = document.getElementById("project-list");

    const app = new TodoApp();

    // Add my todo list
    myTodos.forEach(title => {
        app.addTodo(new Todo(title, "", "", "", false));
    });
    
    // Add example project and example todo
    let exampleProject = new Project("Example Project");
    app.addProject(exampleProject);
    let exampleTodo = new Todo("Clean kitchen", "Clean the kitchen", "Today", "High", false);
    exampleProject.addTodo(exampleTodo);

    // setup task and project add modals
    SetupAddModal("add-task-dialog", "new-task-btn", "modal-task-cancel", "modal-task-add", (event) => {
        const inputTask = document.getElementById("task-input");
        const newTodo = new Todo(inputTask.value, "", "", "", false);
        app.currentProject.addTodo(newTodo);
        inputTask.value = "";
        render();
    })

    SetupAddModal("add-project-dialog", "new-project-btn", "modal-project-cancel", "modal-project-add", (event) => {
        const inputProject = document.getElementById("project-input");
        const newProject = new Project(inputProject.value);
        app.addProject(newProject); 
        inputProject.value = "";
        render();
    })

    function render() {
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
            render();
        }

        app.projects.forEach(project => {
            const isCurrentProject = project === app.currentProject;
            const projectElement = createProjectElement(project.name, isCurrentProject, handleProjectClick);

            ul.appendChild(projectElement);
        });
    }

    function renderTodoList() {
        todoContainer.innerHTML = "";

        app.currentProject.todos.forEach(todo => {
            const todoElement = createTodoElement(todo.title);
            todoContainer.appendChild(todoElement);
        });
    }

    // initial update
    render();

})();
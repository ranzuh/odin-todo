import "./styles.css"
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoApp } from "./todoapp";


let exampleTodo = new Todo("Clean kitchen", "Clean the kitchen", "Today", "High", false);

let exampleProject = new Project("Example Project");

exampleProject.addTodo(exampleTodo);

//console.log(exampleProject.todos);

//exampleProject.removeTodo("Clean kitchen");

//console.log(exampleProject.todos);

const app = new TodoApp();

app.addProject(exampleProject);

console.log(app.projects)
import { Project } from "./project";

export class TodoApp {
    projects = [];

    constructor() {
        this.defaultProject = new Project("Default Project");
        this.addProject(this.defaultProject);
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(projectName) {
        const indexToRemove = this.projects.findIndex((project) => project.name === projectName);
        this.projects.splice(indexToRemove, 1);
    }

    setDefaultProject(project) {
        this.defaultProject = project;
    }
}
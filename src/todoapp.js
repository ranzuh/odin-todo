import { Project } from "./project";

export class TodoApp {
    constructor() {
        this.projects = [];
        this.currentProject = new Project("Default Project");
        this.addProject(this.currentProject);
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(projectName) {
        const indexToRemove = this.projects.findIndex((project) => project.name === projectName);
        this.projects.splice(indexToRemove, 1);
    }

    setCurrentProject(projectName) {
        const index = this.projects.findIndex((project) => project.name === projectName);
        this.currentProject = this.projects[index];
    }
}
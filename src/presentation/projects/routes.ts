import { Router } from "express";
import { ProjectsController } from "./controller";
import { ProjectDatasourceImpl } from "../../infrastructure/datasources/project.datasource.impl";
import { ProjectRepositoryImpl } from "../../infrastructure/repositories/project.repository.impl";

export class ProjectRoutes {
  static get routes(): Router {
    const router = Router();
    const projectDatasource = new ProjectDatasourceImpl();
    const projectRepository = new ProjectRepositoryImpl(projectDatasource);
    const controller = new ProjectsController(projectRepository);

    router.post("/", controller.createTodo);
    router.get("/:id", controller.getProjectById);

    return router;
  }
}

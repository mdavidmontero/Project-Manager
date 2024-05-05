import { Router } from "express";
import { ProjectRoutes } from "./projects/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/projects", ProjectRoutes.routes);
    return router;
  }
}

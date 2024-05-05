import { Response, Request } from "express";
import { ProjectRepository } from "../../domain";

export class ProjectsController {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public getProjectById = async (req: Request, res: Response) => {
    const projects = await this.projectRepository.getById(req.params.id);
    res.json(projects);
  };

  public createTodo = async (req: Request, res: Response) => {
    const projects = req.body;
    const project = await this.projectRepository.create(projects!);
    res.json(project);
  };
}

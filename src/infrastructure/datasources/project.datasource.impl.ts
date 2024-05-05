import Project from "../../data/mongo/models/Project";
import { ProjectDatasource, ProjectEntity } from "../../domain";

export class ProjectDatasourceImpl implements ProjectDatasource {
  async getById(id: string): Promise<ProjectEntity> {
    const project = await Project.findById(id);
    if (!project) throw new Error("Project not found");
    return ProjectEntity.fromObject(project);
  }
  updateById(project: ProjectEntity): Promise<ProjectEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(project: ProjectEntity): Promise<ProjectEntity> {
    const projectCreated = await Project.create(project);
    return ProjectEntity.fromObject(projectCreated);
  }
}

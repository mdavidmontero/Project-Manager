import { ProjectEntity } from "../entities/project.entity";

export abstract class ProjectRepository {
  abstract create(project: ProjectEntity): Promise<ProjectEntity>;
  abstract getById(id: string): Promise<ProjectEntity>;
  abstract updateById(project: ProjectEntity): Promise<ProjectEntity>;
  abstract deleteById(id: number): Promise<void>;
}

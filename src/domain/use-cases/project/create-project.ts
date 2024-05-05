import { ProjectEntity } from "../../entities/project.entity";
import { ProjectRepository } from "../../repositories/project.repository";

export interface CreateProjectUseCase {
  execute(project: ProjectEntity): Promise<ProjectEntity>;
}

export class CreateProject implements CreateProjectUseCase {
  constructor(private readonly repository: ProjectRepository) {}
  execute(project: ProjectEntity): Promise<ProjectEntity> {
    return this.repository.create(project);
  }
}

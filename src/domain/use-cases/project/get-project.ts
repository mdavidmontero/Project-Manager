import { ProjectEntity } from "../../entities/project.entity";
import { ProjectRepository } from "../../repositories/project.repository";

export interface GetProjectUseCase {
  execute(id: string): Promise<ProjectEntity>;
}

export class GetProject implements GetProjectUseCase {
  constructor(private readonly repository: ProjectRepository) {}
  execute(id: string): Promise<ProjectEntity> {
    return this.repository.getById(id);
  }
}

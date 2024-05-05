import {
  ProjectDatasource,
  ProjectEntity,
  ProjectRepository,
} from "../../domain";

export class ProjectRepositoryImpl implements ProjectRepository {
  constructor(private readonly datasource: ProjectDatasource) {}
  getById(id: string): Promise<ProjectEntity> {
    return this.datasource.getById(id);
  }
  updateById(project: ProjectEntity): Promise<ProjectEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  create(project: ProjectEntity): Promise<ProjectEntity> {
    return this.datasource.create(project);
  }
}

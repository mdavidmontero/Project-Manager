import { Types } from "mongoose";
export class ProjectEntity {
  constructor(
    public id: string,
    public projectName: string,
    public clientName: string,
    public description: string,
    public tasks: Types.ObjectId[],
    public manager: Types.ObjectId,
    public team: Types.ObjectId[]
  ) {}

  static fromObject(object: { [key: string]: any }) {
    const {
      id,
      _id,
      projectName,
      clientName,
      description,
      tasks,
      manager,
      team,
    } = object;

    return new ProjectEntity(
      id || _id,
      projectName,
      clientName,
      description,
      tasks,
      manager,
      team
    );
  }
}

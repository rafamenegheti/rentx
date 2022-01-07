import { v4 as uuidv4 } from "uuid";

import { ICreateSpecificationDTO } from "../repositories/ISpecificationsRepository";

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICreateSpecificationDTO) {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.name = name;
    this.description = description;
  }
}

export { Specification };

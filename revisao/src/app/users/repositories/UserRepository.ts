import { CreateUserDTO } from "../dtos/createUserDto";
import { User } from "../entities/User";

class UserRepository {
  constructor(private model: typeof User) {}

  async create(user: CreateUserDTO) {
    return this.model.create(user);
  }
}

export { UserRepository }
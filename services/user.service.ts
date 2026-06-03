import { CreateUserDTO, User } from "../types/User";
import { UserModel } from "../models/user.model";

export class UserService {
  constructor(private userModel: UserModel) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.getAllUsers();
  }

  async findUserById(id: number): Promise<User | undefined> {
    return await this.userModel.findUserById(id);
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    console.log("Service received data:", data);
    return await this.userModel.createUser({
      ...data,
      // To be changed - for now it will be hardcoded
      role_id: data.role_id ?? 2,
      location_id: data.location_id ?? 1,
      bio: data.bio ?? null,
    });
  }

  async updateUser(id: number, data: Partial<User>): Promise<User | undefined> {
    return await this.userModel.updateUser(id, data);
  }

  async deleteUser(id: string): Promise<boolean> {
    return await this.userModel.deleteUser(id);
  }

  async verifyUserLogin(username: string, password: string): Promise<any> {
    return await this.userModel.verifyUserLogin(username, password);
  }
}

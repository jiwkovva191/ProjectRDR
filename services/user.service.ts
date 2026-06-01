import { CreateUserDTO, User } from "../types/User"
import { UserModel } from "../models/user.model"

export class UserService{

    constructor(private userModel: UserModel){}

    async getAllUsers():Promise<User[]>
    {
        return await this.userModel.getAllUsers();
    }

    async findUserById(id: number): Promise<User | undefined>{
        return await this.userModel.findUserById(id);
    }

    async createUser(data: CreateUserDTO): Promise<User> {
        return await this.userModel.createUser({
            ...data,
            role_id: 2,
            location_id: 1, 
        });
    }

    updateUser(id: string, user: Partial<User>): User | undefined{
        return this.userModel.updateUser(id, user);
    }

    deleteUser(id: string): boolean{
        return this.userModel.deleteUser(id);
    }   
}
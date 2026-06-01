import { User } from "../types/User"
import { UserModel } from "../models/user.model"

export class UserService{

    constructor(private userModel: UserModel){

    }

    async getAllUsers():Promise<User[]>
    {
        return await this.userModel.getAllUsers();
    }

    findUserById(id: string): User | undefined{
        return this.userModel.findUserById(id);
    }

    // createUser(data: {username: string, email: string}): User {
    //     // const id = Date.now().toString();
    //     // const user: User = {id, ...data}
    //     // return this.userModel.createUser(user);
    // }

    updateUser(id: string, user: Partial<User>): User | undefined{
        return this.userModel.updateUser(id, user);
    }

    deleteUser(id: string): boolean{
        return this.userModel.deleteUser(id);
    }   
}
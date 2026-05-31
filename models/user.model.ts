import { User } from "../types/User"
export class UserModel{

    // TODO: Replace with db when available
    constructor(private users:Map<string, User>){

    }

    getAllUsers():User[]{
        return [...this.users.values()]; 
    }

    findUserById(id: string): User | undefined{
        return this.users.get(id)
    }

    createUser(user: User){
        this.users.set(user.id, user);
        return user;
    }

    updateUser(id: string, data: Partial<User>): User | undefined{
        const existingUser = this.users.get(id);
        if(!existingUser){
            return undefined;
        }

        const updatedUser = {...existingUser, ...data, id};
        this.users.set(id, updatedUser)
        return updatedUser;
    }

    deleteUser(id: string): boolean{
        return this.users.delete(id);
    }
}
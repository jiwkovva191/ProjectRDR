import { User } from "../types/User"
import { Pool, RowDataPacket } from "mysql2/promise"
export class UserModel{

    constructor(private db: Pool){

    }

    async getAllUsers():Promise<User[]>{
        const [rows] = await this.db.query(
            `SELECT * FROM users`
        );
        return rows as User[];
    }

    findUserById(id: string): User | undefined{
        return undefined
    }

    createUser(user: User){
        // this.users.set(user.id, user);
        // return user;
        return undefined;
    }

    updateUser(id: string, data: Partial<User>): User | undefined{
        // const existingUser = this.users.get(id);
        // if(!existingUser){
        //     return undefined;
        // }

        // const updatedUser = {...existingUser, ...data, id};
        // this.users.set(id, updatedUser)
        // return updatedUser;
        return undefined;
    }

    deleteUser(id: string): boolean{
        // return this.users.delete(id);
        return false;
    }
}
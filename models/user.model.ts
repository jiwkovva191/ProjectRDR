import { CreateUserDTO, User } from "../types/User"
import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise"
export class UserModel{

    constructor(private db: Pool){}

    async getAllUsers():Promise<User[]>{
        const [rows] = await this.db.query<RowDataPacket[]>(
            "SELECT * FROM users"
        );
        return rows as User[];
    }

    async findUserById(id: number): Promise<User | undefined>{
       const [rows] = await this.db.query<RowDataPacket[]>(
        "SELECT * FROM users WHERE user_id = ?",
        [id]
       );
       return rows[0] as User;
    }

    // The role and location ids are hardcoded in the UserService and UserController for test purposes.
    async createUser(user: CreateUserDTO): Promise<User>{
        const [result] = await this.db.query<ResultSetHeader>(
            "INSERT INTO users(user_id, username, email, role_id, location_id) VALUES (NULL, ?, ?, ?, ?)",
            [user.username, user.email, user.role_id, user.location_id]
        )
        return{
            id: result.insertId,
            username: user.username,
            email: user.email,
            role_id: user.role_id,
            location_id: user.location_id
        }
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
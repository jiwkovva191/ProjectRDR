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

    // The role and location ids are hardcoded in the UserService for test purposes.
    async createUser(user: CreateUserDTO): Promise<User>{
        console.log("Model received user:", user)
        const [result] = await this.db.query<ResultSetHeader>(
            "INSERT INTO users(user_id, username, email, password, role_id, location_id, bio) VALUES (NULL, ?, ?, ?, ?, ?, ?)",
            [user.username, user.email, user.password, user.role_id, user.location_id, user.bio]
        )
        return{
            id: result.insertId,
            username: user.username,
            email: user.email,
            password: user.password,
            role_id: user.role_id,
            location_id: user.location_id,
            bio: user.bio
        }
    }

    async updateUser(id: number, data: Partial<User>): Promise<User | undefined>{
       const existing = await this.findUserById(id);
       if(!existing){
        return undefined
       }

       const updated = {...existing, ...data}
       await this.db.query<ResultSetHeader>(
            "UPDATE users SET username = ?, email = ?, password = ?, role_id = ?, location_id = ?, bio = ? WHERE user_id = ?",
            [updated.username, updated.email, updated.password, updated.role_id, updated.location_id, updated.bio, id]
       )
       return updated;
    }

    async deleteUser(id: string): Promise<boolean>{
        const [result] = await this.db.query<ResultSetHeader>(
            "DELETE FROM users WHERE user_id = ?",
            [id]
        )
        return result.affectedRows > 0
    }

    async verifyUserLogin(username: string, password: string): Promise <any> {
        const [rows] = await this.db.query<any[]>(
            "SELECT user_id, username, email FROM users WHERE username = ? AND password = ?",
            [username, password]
        );
        return rows[0];
    }
}
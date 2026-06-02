import {Request, Response} from "express";
import { UserService } from "../services/user.service";

interface IdParams{
    id: string
}

export class UserController{

    constructor(private userService: UserService){

    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        const users = await this.userService.getAllUsers();      
        res.json({
            'users': users,
        });
    }

    findUserById = async (req: Request<IdParams>, res: Response): Promise<void> => {
        const id  = Number(req.params.id);
        const user = await this.userService.findUserById(id);
        if(!user){
            res.status(404).json({
                'message': 'User not found'
            })
            return;
        }
        res.json({
            'message': 'User found',
            'user': user,
        });
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
    // try catch block is added for testing purposes, but might add it ti the other methods too
        try{
            // Here we deconstruct everything that comes from the body
            const { username, email, password, role_id, location_id, bio  } = req.body
            console.log("Controller received body:", req.body);
            const user = await this.userService.createUser({ username, email, password,  role_id, location_id, bio });
            res.status(201).json({
                'message': 'User Created',
                'user': user,
            });
        } catch(err){
        console.error("Create user error:", err);

            res.status(500).json({
                message: "Server Error",
                error: err
            }); 
        }
    }

    updateUser = async (req: Request<IdParams>, res: Response): Promise<void> => {
        try{
            const id  = Number(req.params.id);
            const user = await this.userService.updateUser(id, req.body);
            if(!user){
                res.status(404).json({
                    'message': 'User not found'
                })
                return;
            }
            res.json({
                'message': 'User updated',
                'user': user,
            });
        }   catch(err){
            console.error("Update user error:", err);
            res.status(500).json({
                'message': 'Server error',
                'error': err
            });
        }
    } 

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try{
            const { id } = req.params;
            const deleted = await this.userService.deleteUser(id as string)
            if(!deleted){
                res.status(404).json({
                    'message': 'User not found'
                })
            }
            res.json({
                'message': 'User deleted',
            }); 
        } catch (err) {
            console.error("Delete user error:", err);
            res.status(500).json({
                'message': 'Server error',
                'error': err
            });
        }
    }
}
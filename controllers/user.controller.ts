import {Request, Response} from "express";
import { UserService } from "../services/user.service";


export class UserController{

    constructor(private userService: UserService){

    }

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers();      
        res.json({
            'users': users,
        });
    }

    findUserById = (req: Request, res: Response) => {
        const { id } = req.params
        const user = this.userService.findUserById(id as string);
        if(!user){
            res.json({
                'message': 'User not found'
            })
            return;
        }
        res.json({
            'user': user,
        });
    }

    createUser = (req: Request, res: Response) => {
        const { username, email } = req.body
        const user = this.userService.createUser({ username, email });
        res.json({
            'user': user,
        });
    }

    updateUser = (req: Request, res: Response) => {
        const { id } = req.params;
        const data = req.body;
        const user = this.userService.updateUser(id as string, data);
        if(!user){
            res.json({
                'message': 'User not found'
            })
            return;
        }
        res.json({
            'user': user,
        }); 
    } 

    deleteUser = (req: Request, res: Response) => {
        const { id } = req.params;
        const deleted = this.userService.deleteUser(id as string)
        if(!deleted){
            res.json({
                'message': 'User not found'
            })
        }
        res.json({
            'message': 'User deleted',
        }); 
    }
}
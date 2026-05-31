import {Router} from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { User } from "../types/User"



const userRoutes = Router();

// TODO: replace with db when created
const users = new Map<string, User>();
const userModel = new UserModel(users);
const userService = new UserService(userModel);
const userController = new UserController(userService);

userRoutes.get('/users', userController.getAllUsers);
userRoutes.get('/users/:id', userController.findUserById);
userRoutes.post('/users', userController.createUser);
userRoutes.put('/users/:id', userController.updateUser);
userRoutes.delete('/users/:id', userController.deleteUser);

export default userRoutes;
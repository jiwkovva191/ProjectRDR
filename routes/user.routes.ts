import {Router} from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import pool from "../config/db"



const userRoutes = Router();

const userModel = new UserModel(pool);
const userService = new UserService(userModel);
const userController = new UserController(userService);

userRoutes.get('/users', userController.getAllUsers);
userRoutes.get('/users/:id', userController.findUserById);
userRoutes.post('/users', userController.createUser);
userRoutes.put('/users/:id', userController.updateUser);
userRoutes.delete('/users/:id', userController.deleteUser);

//Login route
userRoutes.post('/login', userController.verifyUserLogin);
export default userRoutes;
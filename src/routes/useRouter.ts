import express from  'express';
import {UserBusiness} from "../busines/UserBusiness";
import {UseController} from "../controler/UserControler";
import {UserData} from "../data/UserData";

export const  userRouter = express.Router();
const userController=new UseController(new UserBusiness(new UserData()));

userRouter.post('/sigup',userController.sigup);

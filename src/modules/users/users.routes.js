import { checkId } from "../../middlewares/checkId.js"
import { addUser, deleteUser, findUser, getUsers, login, updateUser, verifyAccount } from "./user.controller.js"
import express from 'express'

   export const userRoutes = express().router

   userRoutes.use(express.json())
   
userRoutes.get("/users", getUsers )


userRoutes.post("/users/register", addUser)

userRoutes.post("/users/login", login)

userRoutes.put("/users/:id", checkId ,updateUser)

userRoutes.get("/user/:id",findUser)

userRoutes.delete("/users/:id",checkId ,deleteUser)


userRoutes.get("/user/verify/:email", verifyAccount) 
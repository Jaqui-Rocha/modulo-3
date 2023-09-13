import { Router } from "express";
import { UserModule } from "../users/UserModule";

const userRoutes = Router()
const { controller } = UserModule.getInstances()

userRoutes.post("/", controller.create.bind(controller))

export { userRoutes }
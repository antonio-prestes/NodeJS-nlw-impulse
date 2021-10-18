import {Router} from "express";
import {AuthUserController} from "./controllers/AuthUserController";

const router = Router();

router.post('/auth', new AuthUserController().handle);

export {router}
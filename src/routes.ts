import {Router} from "express";
import {AuthUserController} from "./controllers/AuthUserController";
import {ensureAuth} from "./middleware/ensureAuth";
import {CreateMessageController} from "./controllers/CreateMessageController";

const router = Router();

router.post('/auth', new AuthUserController().handle);

router.post('/messages', ensureAuth, new CreateMessageController().handle);

export {router}
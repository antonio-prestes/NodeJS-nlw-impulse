import {Router} from "express";
import {AuthUserController} from "./controllers/AuthUserController";
import {ensureAuth} from "./middleware/ensureAuth";
import {CreateMessageController} from "./controllers/CreateMessageController";
import {GetLast3MessagesController} from "./controllers/GetLast3MessagesController";
import {ProfileUserController} from "./controllers/ProfileUserController";

const router = Router();

router.post('/auth', new AuthUserController().handle);

router.post('/messages', ensureAuth, new CreateMessageController().handle);

router.get('/messages/last3', new GetLast3MessagesController().handle);

router.get('/profile',ensureAuth, new ProfileUserController().handle);

export {router}
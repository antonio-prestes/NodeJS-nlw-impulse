import {json, Request, Response} from "express";
import {AuthUserService} from "../services/AuthUserService";

class AuthUserController {
    async handle(request: Request, response: Response) {
        const {code} = request.body;

        const service = new AuthUserService()

        try {
            const result = await service.execute(code);
            return response.json(result);
        } catch (err) {
            return response.json(err.message);
        }
    }
}

export {AuthUserController}
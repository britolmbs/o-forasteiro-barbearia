import {Request, Response} from 'express'
import { UserDetailService } from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(request: Request, response: Response){

        const user_id = request.user_id;

        const userDetailService = new UserDetailService();

        const datailUser = await userDetailService.execute();

        return response.json(datailUser);

    }
}
export { DetailUserController }
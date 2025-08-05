import prismaClient from "../../prisma";

interface AuthUserResquest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthUserResquest){
        return {ok: true}
    }
}
export { AuthUserService }
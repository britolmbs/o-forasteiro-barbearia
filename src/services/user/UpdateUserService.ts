import prismaClient from "../../prisma";

interface UserRequest{
    user_id: string;
    name: string;
    endereco: string;
}

class UpdateUserSerive {
    async execute({user_id, name, endereco}: UserRequest){
        try {
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                id: user_id,
            }
        })

        if(!userAlreadyExists){
            throw new Error("Usuario não Existe");
        
        }
        const userUpdated = await prismaClient.user.update({
            where:{
                id: user_id
            },
            data:{
                name,
                endereco,
            },
            select:{
                name: true,
                email: true,
                endereco: true,
            }
        })

        return userUpdated;
        
        } catch (err) {
            console.log(err);
            throw new Error("Error ao atualizar o Usuario")
        }
    }
}

export { UpdateUserSerive }
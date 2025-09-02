import { canSSRAuth } from "@/utils/canSSRAuth";
import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Dashboard(){

    return (
        <>
        <Head>
            <title>O Forasteiro - Minha Barbearia</title>
            </Head>
            <Flex>
                <Text>Bem vindo ao Dashboard</Text>
            </Flex>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) => {
    return{
        props:{

        }
    }
})
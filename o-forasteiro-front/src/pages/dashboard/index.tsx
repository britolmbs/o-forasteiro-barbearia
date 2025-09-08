import { canSSRAuth } from "@/utils/canSSRAuth";
import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Siderbar } from '../../components/sidebar'

export default function Dashboard(){

    return (
        <>
        <Head>
            <title>O Forasteiro - Minha Barbearia</title>
            </Head>
            <Siderbar>
            <Flex>
                <Text>Bem vindo ao Dashboard</Text>
            </Flex>
            </Siderbar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) => {
    return{
        props:{

        }
    }
})
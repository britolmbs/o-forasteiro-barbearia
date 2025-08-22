import Head from "next/head"
import {Flex, Text } from '@chakra-ui/react'

export default function Home(){
    return (
        <>
        <Head>
            <title>O Forasteiro Barbearia - Seu Sistema Completo</title>
        </Head>
        <Flex background="barber.900" height="100vh" alignItems='center' justifyContent='center'>
        <Text fontSize={30}>O Forasteiro</Text>
        </Flex>
        </>
    )
}
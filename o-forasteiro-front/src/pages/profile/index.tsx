import { Siderbar } from "@/components/sidebar";
import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Profile(){
    return(
        <>
        <Head>
            <title>
                Minha Conta - O Forasteiro
            </title>
        </Head>
        <Siderbar>
            <Flex direction='column' alignItems='flex-start' justifyContent='flex-start'>
                <Flex w='100%' direction='row' alignItems='center' justifyContent='flex-start'>
                    <Heading fontSize='3xl' mt={4} mb={4} mr={4} color='orange.900'>Minha Conta</Heading>
                </Flex>

                <Flex pt={8} pb={8} maxW='700px' w='100%' direction='column' alignItems='center' justifyContent='center' bg='barber.400'>
                <Flex direction='column' w='85%'>
                    <Text mb={2} fontSize='xl' fontWeight='bold' color='white'>O Forasteiro</Text>
                    <Input w='100%'
                    bg='gray.900'
                    placeholder="Nome da Barbearia"
                    size='lg'
                    />
                </Flex>
                </Flex>
            </Flex>
        </Siderbar>
        </>
    )
}
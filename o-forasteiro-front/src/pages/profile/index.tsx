import { Siderbar } from "@/components/sidebar";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Profile(){
    const {logoutUser} = useContext(AuthContext);
    
    async function handleLogout() {
        await logoutUser();
    }

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
                    mb={3}
                    />
                    <Text mb={2} fontSize='xl' fontWeight='bold' color='white'>Endereço:</Text>
                    <Input w='100%'
                    bg='gray.900'
                    placeholder="Endereço da barbearia"
                    size='lg'
                    mb={3}
                    />
                    <Text mb={3} fontSize='xl' fontWeight='bold' color='white'>Plano Atual</Text>
                    <Flex direction='row' w='100%' mb={3} p={1} borderWidth={1} rounded={6} background='barber.900'
                    alignItems='center' justifyContent='space-between' 
                    >
                        
                        <Text p={2} fontSize='lg' color="#4dffb4">Plano Gratis</Text>
                        <Link href='/planos'>
                        <Box cursor='pointer' p={1} pl={2} pr={2} background="#00cd52" rounded={4} color='white'>Mudar Plano</Box>
                        </Link>
                    </Flex>

                    <Button w='100%' mt={3} mb={4} bg='button.cta' size='lg' _hover={{bg: '#ffb13e'}}>
                        Salvar
                    </Button>
                    <Button w='100%' mb={6} bg='transparent' borderWidth={2} borderColor='red.500' color='red.500' size='lg' _hover={{bg: 'transparent'}} onClick={handleLogout} > Sair da Conta</Button>
                </Flex>
                </Flex>
            </Flex>
        </Siderbar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) =>{
    return {
        props:{}
    }
})
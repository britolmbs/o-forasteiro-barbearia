import { Button, Center, Flex, Input, Text } from "@chakra-ui/react"
import Head from "next/head"  
import Image from "next/image"
import logoImg from '../../../public/images/logo.svg'
import Link from "next/link"


export default function Register(){
    return(
        <>
        <Head>
            <title>
                O Forasteiro Barbearia - Crie sua Conta
            </title>
        </Head>
        <Flex background="barber.900" height="100vh" alignItems='center' justifyContent='center'>
            <Flex width={640} direction='column' p={14} rounded={8}>
                <Center p={4}>
                    <Image
                    src={logoImg}
                    alt="Logo"
                    quality={100}
                    width={240}
                    objectFit="fill"
                    />
                </Center>
                <Input
                background='barber.400'
                variant='outline'
                size='lg'
                placeholder="Digite seu Nome"
                type="text"
                mb={3}
                color='barber.200'
                                 />
                <Input
                background='barber.400'
                variant='outline'
                size='lg'
                placeholder="Digite seu Email"
                type="email"
                mb={3}
                color='barber.200'
                />
                <Input
                background='barber.400'
                variant='outline'
                size='lg'
                placeholder="Digite sua Senha"
                type="password"
                mb={3}
                color='barber.200'
                />

                <Button
                background='button.cta'
                mb={6}
                color='gray.900'
                size='lg'
                _hover={{bg: '#ffb13e'}}
                >
                    Crie seu Registro
                </Button>

                <Center mt={2}>
                    <Link href='/login'>
                    <Text cursor='pointer' color='barber.200'>Já possui uma Conta? <strong>Faça login</strong></Text>
                    </Link>
                </Center>
                 </Flex>

            
             </Flex>
        
        </>
    )
}
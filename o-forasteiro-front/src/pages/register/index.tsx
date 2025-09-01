import { Button, Center, Flex, Input, Text } from "@chakra-ui/react"
import Head from "next/head"  
import Image from "next/image"
import logoImg from '../../../public/images/logo.svg'
import Link from "next/link"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"


export default function Register(){

    const {signUp} = useContext(AuthContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     async function handleRegister(){
       if(name === '' && email === '' && password === ''){
        return;
       }

       await signUp({
        name,
        email,
        password
       })
    }
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
                value={name}
                onChange={ (e) => setName(e.target.value) }
                 />
                <Input
                background='barber.400'
                variant='outline'
                size='lg'
                placeholder="Digite seu Email"
                type="email"
                mb={3}
                color='barber.200'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                background='barber.400'
                variant='outline'
                size='lg'
                placeholder="Digite sua Senha"
                type="password"
                mb={3}
                color='barber.200'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                background='button.cta'
                mb={6}
                color='gray.900'
                size='lg'
                _hover={{bg: '#ffb13e'}}
                onClick={handleRegister}
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
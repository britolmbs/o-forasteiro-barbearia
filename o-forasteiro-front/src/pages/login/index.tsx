import Head from "next/head";
import { Center, Flex, Input, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import logoImg from '../../../public/images/logo.svg'
import Link from "next/link";
import { useState } from "react";



export default function Login() {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(){
    console.log(email, password)
  }
  return(
    <>
    <Head>
        <title>O Forasteiro Barbearia - Faça login para acessar</title>
    </Head>
    <Flex background='barber.900' color='barber.200' height='100vh' alignItems='center' justifyContent='center'>
      <Flex width={640} direction='column' p={14} rounded={8}>
        <Center p={4}>
             <Image
            src={logoImg}
            alt="Logo"
            quality={100}
            width={240}
            />
        </Center>
        <Input
          background="barber.400"
          variant="outline"
          size="lg"
          placeholder="Digite seu Email"
          type="email"
          mb={3}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         /> 

         <Input
         background="barber.400"
         variant='outline'
         size='lg'
         placeholder="Digite sua Senha"
         type="password"
         mb={6}
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <Button
         background="button.cta"
         mb={6}
         color='gray.900'
         size='lg'
         _hover={{bg: '#ffb13e'}}
         onClick={handleLogin}
         >
          Acessar
         </Button>

         <Center mt={2}>
          <Link href='/register'>
          <Text cursor='pointer'>
          Ainda não possui conta? <strong>Cadastre-se</strong>
          </Text>
          </Link>
         </Center>

      </Flex>
    </Flex>
    </>
  )
}
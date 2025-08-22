import Head from "next/head";
import { Center, Flex, Input, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import logoImg from '../../../public/images/logo.svg'
import Link from "next/link";


export default function Login() {
  return(
    <>
    <Head>
        <title>O Forasteiro - Faça login para acessar</title>
    </Head>
    <Flex background='barber.900' height='100vh' alignItems='center' justifyContent='center'>
      <Flex width={640} direction='column' p={14} rounded={8}>
        <Center p={4}>
             <Image
            src={logoImg}
            alt="Logo"
            quality={100} 
            />
        </Center>
        <Input
          background="barber.400"
          variant="outline"
          size="lg"
          placeholder="Digite seu Email"
          type="email"
          mb={3}
         /> 

         <Input
         background="barber.400"
         variant='outline'
         size='lg'
         placeholder="Digite sua Senha"
         type="password"
         mb={6}
         />
         <Button
         background="button.cta"
         mb={6}
         color='gray.900'
         size='lg'
         _hover={{bg: '#ffb13e'}}
         >
          Acessar
         </Button>

         <Center mt={3}>
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
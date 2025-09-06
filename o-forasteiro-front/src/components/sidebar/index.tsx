import { ReactNode} from 'react'
import { Box, BoxProps, CloseButton, Flex, Text, useColorModelValue } from '@chakra-ui/react'
import { FiClipboard, FiScissors, FiSettings } from 'react-icons/fi'
import {IconType} from 'react-icons'
import Link from 'next/link' 

interface LinkItemProps{
    name: string;
    icon: IconType;
    route: string
}

const LinkItems : Array<LinkItemProps> = [
    { name: 'Agenda', icon: FiScissors, route: '/dashboard' },
    { name: 'Cortes', icon: FiClipboard, route: '/haircuts' },
    { name: 'Minha Conta', icon: FiSettings, route: '/profile' },
]

export function Siderbar (){
    return(
        <Box minH='100vh' bg="barber.900" color='barber.200' >

        </Box>
    )
}

interface SiderbarProps extends BoxProps{
onClose: () => void;
}
const SiderbarContent = ({onClose, ...rest}: SiderbarProps) => {
return (
    <Box
    bg='barber.400'
    borderRight='1px'
    borderRightColor={useColorModelValue('gray.200', 'gray.700')}
    w={{base: 'full', md: 60}}
    pos='fixed'
    h='full'
    {...rest}
    >
        <Flex h='20' alignContent='center' justifyContent='space-between' mx='8'>
            <Link href='/dashboard'>
            <Flex cursor='pointer' userSelect='none' flexDirection='row'>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>Barbearia - </Text>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>O Forasteiro</Text>
            </Flex>
            </Link>
            <CloseButton display={{base: 'flex', md: 'none' }} onClick={onClose}/>
        </Flex>
        {LinkItems.map(link) => (

        )}

    </Box>
)
}

const NavItem = () => {
    
}
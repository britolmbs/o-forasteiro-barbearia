import { ReactNode} from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
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
        <Box minH='100vh' bg="barber.900">

        </Box>
    )
}

interface SiderbarProps extends BoxProps{

}
const SiderbarContent = () => {
return (
    
)
}
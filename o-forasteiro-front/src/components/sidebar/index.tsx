import { ReactNode} from 'react'
import { Box, BoxProps, CloseButton, Drawer, DrawerContent, Flex, FlexProps, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { FiClipboard, FiMenu, FiScissors, FiSettings } from 'react-icons/fi'
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

export function Siderbar ({children}: {children: ReactNode }){
    const {isOpen , onOpen, onClose} = useDisclosure();
    return(
        <Box minH='100vh' bg="barber.900" color='barber.200' >
            <SiderbarContent 
            onClose={()=> onClose}
            display={{base: 'none', md: 'block'}}
            />

            <Drawer.Root 
            isOpen={isOpen}
            placement='start'
            returnFocusOnClose={onClose}
            size="full"
            onClose={onClose}
            >
                <DrawerContent>
                    <SiderbarContent onClose={() => onClose} />
                </DrawerContent>
                 </Drawer.Root>
                 <MobileNav display={{base: 'flex', md= 'none'}} onOpen={onOpen} />
              <Box>
                {children}
            </Box>
           

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
    bgGradient="to-r" gradientFrom="gray.200" gradientTo="gray.700"
    //borderRightColor={useColorModelValue('gray.200', 'gray.700')}
    w={{base: 'full', md: 60}}
    pos='fixed'
    h='full'
    {...rest}
    >
        <Flex h='20' alignContent='center' justifyContent='space-between' mx='8'>
            <Link href='/dashboard'>
            <Flex cursor='pointer' userSelect='none' flexDirection='row'>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>Barbearia - </Text>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold' color='button.cta'>O Forasteiro</Text>
            </Flex>
            </Link>
            <CloseButton display={{base: 'flex', md: 'none' }} onClick={onClose}/>
        </Flex>
        {LinkItems.map(link => (
            <NavItem icon={link.icon} route={link.route} key={link.name}>
                {link.name}
            </NavItem> 
        ))}

    </Box>
)
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactNode;
    route: string;
}

const NavItem = ({icon, children, route, ...rest}: NavItemProps) => {
    return(
    <Link href={route} style={{ textDecoration: 'none' }}>
        <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
            bg: 'barber.900',
            color: 'white'
        }}
        {...rest}
        >
            {icon && (
                <Icon
                mr={4}
                fontSize='16'
                as={icon}
                _groupHover={{ color: 'white'}}
                />
            )}
            {children}
     </Flex>
    </Link>
)}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
        ml={{base: 0, md: 6}}
        px={{base: 4, md: 24}}
        height='20'
        alignItems='center'
        bgGradient="to-r" gradientFrom="white" gradientTo="gray.900"
        borderBottomRadius='1px'
        borderBottomColor={'gray.200'}
        justifyContent='flex-start'
        {...rest}
        >
            <IconButton
            variant='outline'
            onClick={onOpen}
            aria-label='open menu'
           // _icon={<FiMenu />}
            />

        </Flex>
    )
}
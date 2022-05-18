import {Flex, Divider, Avatar, Heading, Text, IconButton, Button} from '@chakra-ui/react'
import SvgMenu from  '../../dist/Menu'
import SvgAnalytics from  '../../dist/Analytics'
import SvgCalendar from  '../../dist/Calendar'
import SvgServicios from  '../../dist/Servicios'
import React, {useState, useContext } from 'react'
import NavItem from './NavItem';
import AuthContext from '../../auth/AuthContext'

function Navbar(){

    const [navSize, setNavSize] = useState("small")
    const {user, logoutUser} = useContext(AuthContext)

    if (user) {
    return(
        <>
        <Flex bg='secondary' h="100%" flexFlow='column wrap' justify="space-between"
        w={navSize === "small"? "75px": "250px"}></Flex>
        <Flex bg='secondary' h="100%" position="fixed" flexFlow='column wrap' justify="space-between"
        w={navSize === "small"? "75px": "200px"}
        >
        
        <Flex direction="column"  p="5%" align={navSize === "small"? "center": "flex-start"}  >
            <IconButton size='xs' color="white" background="none" mt="5" _hover={{bg:'none'}} icon={<SvgMenu/>} 
            onClick={()=> {
                if (navSize === "small")
                    setNavSize("large")
                else 
                    setNavSize("small")
            }}
            />
            <NavItem navSize={navSize} icon={SvgCalendar} title="Calendar" slash='/klndr_front/calendar' />
            <NavItem navSize={navSize} icon={SvgServicios} title="Garage" slash='klndr_front/garage' />      
            <NavItem navSize={navSize} icon={SvgAnalytics} title="Reports" slash='klndr_front/analytics' /> 
        </Flex>

        <Flex p="5%" flexFlow='column wrap' w="100%" mb={4} gap='3'
        align={navSize === "small"? "center": "flex-start"}  
        >
            <Divider display={navSize === "small"? "none": "flex"}/>
            <Button size='sm' onClick={logoutUser} > LG</Button>   
            <Flex mt="4" align="center"> 
                <Avatar size="sm" /> 
                <Flex direction="column" ml="4" display={navSize === "small"? "none": "flex"} >
                    <Heading color="whiteAlpha.800" size="sm"> {user.username} </Heading>
                    <Text color="whiteAlpha.800" >Jefe de taller</Text>
                </Flex>
            </Flex>
        </Flex>

        </Flex>
        </>
    )
    }

}

export default Navbar;
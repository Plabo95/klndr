import {Flex, Heading, Text, Button, Box, Image} from '@chakra-ui/react'
import img1 from '../assets/landing1_img1.png'
import img2 from '../assets/landing2_img1.png'
import img3 from '../assets/landing3_img1.png'
import img5 from '../assets/landing5_img1.png'

import {AiOutlineCalendar, AiOutlineUnorderedList} from 'react-icons/ai';
import {MdOutlinePeopleAlt} from 'react-icons/md';
import {VscGraph} from 'react-icons/vsc';
import {FiTool} from 'react-icons/fi';
import {RiBookletLine} from 'react-icons/ri';

export default function Landing(){

    const p_franja = '5%'
    const h_franja = '75vh'
    const icon_box = '120px'

    return(
        <Flex direction='column' w='100%' >

            <Flex bg='white' height='8vh' w='100%' p='1%' align='center'>
                <Flex w='50%' justify='start' ml='3%'>
                    <Flex><Heading size='md' >another</Heading><Heading size='md' color={'blue'}>tool</Heading></Flex>
                </Flex>
                <Flex w='50%' justify='end' gap='10' align='center' mr='3%' >
                    <Text>Precios</Text>
                    <Button variant='outline' borderColor='blue' color='blue' bg='white' >Iniciar sesión</Button>
                    <Button bg='blue' color='white' >Pruébalo gratis</Button>
                </Flex>
            </Flex>

            <Flex bg='white' height={h_franja} w='100%'  p={p_franja} > 
                <Flex direction='column' w='50%' ml='5%' >
                    <Flex><Heading size='3xl' >another</Heading><Heading size='3xl' color={'orange'}>day</Heading></Flex>
                    <Flex><Heading size='3xl'>another</Heading><Heading size='3xl' color={'blue'}>tool</Heading></Flex>
                    <Heading w='60%' my='3%' size='lg' >Software de gestión para tu taller mecánico</Heading>
                    <Text my='4%' >Administra tu taller online de manera muy intuitiva y sencilla</Text>
                    <Button bgColor='blue' color='white' size='sm' h='5vh' w='20%' >Pruébalo gratis</Button>
                </Flex>
                <Flex w='50%' p='5%' >
                <Image src={img1}/>
                </Flex>   
            </Flex>

            <Flex bg='lightgray' height={h_franja} w='100%'  direction='column' align='center' p={p_franja}>
                <Heading>Un software eficiente y organizado</Heading>
                <Image src={img2}/>        
                <Text>No pierdas más el tiempo con programas liosos, llenos de pestañas con funciones inservibles.
                    anothertool quiere facilitarte el trabajo con un diseño intuitivo y actual.
                </Text>
            </Flex>

            <Flex bg='white' height={h_franja} w='100%'  border={'1px'} p={p_franja} align='center' >
                <Flex w='50%'>
                    <Image src={img3}/>  
                </Flex>
                <Flex w='50%' direction='column' gap='3'>
                    <Flex>
                        <Text>Prioriza la experiencia del usuario</Text>
                    </Flex>
                    <Flex>
                        <Text>Fácil e intuitivo</Text>
                    </Flex>
                    <Flex>
                        <Text>Loremipsum loremipsum</Text>
                    </Flex>
                    <Flex>
                        <Text>Singelmery singelflery</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex bg='lightgray' height={h_franja} w='100%'  border={'1px'} direction='column' align='center' p={p_franja}>
                <Heading>anothertool, tu otra herramienta online</Heading>      
                <Text>Calendario, seguimiento de trabajos, historial de cliente,s gestión de citas, tareas y servicios
                    estadísticas... 
                </Text>
                <Flex gap='10'  mt='5%' >
                    <Flex bg='white' w={icon_box} h={icon_box} rounded='xl' align='center' justify= 'center'>
                        <AiOutlineCalendar color='blue' size='50%' />
                    </Flex>
                    <Flex bg='white' w={icon_box} h={icon_box} rounded='xl' align='center' justify= 'center'>
                        <AiOutlineUnorderedList color='orange' size='50%' />
                    </Flex>
                    <Flex bg='white' w={icon_box} h={icon_box} rounded='xl' align='center' justify= 'center'>
                        <MdOutlinePeopleAlt color='orange' size='50%' />
                    </Flex>
                    <Flex bg='white' w={icon_box} h={icon_box} rounded='xl' align='center' justify= 'center'>
                        <RiBookletLine color='blue' size='50%' />
                    </Flex>
                    <Flex bg='white' w={icon_box} h={icon_box} rounded='xl' align='center' justify= 'center'>
                        <VscGraph color='orange' size='50%' />
                    </Flex>
                    <Flex bg='white' w={icon_box} h={icon_box} rounded='xl' align='center' justify= 'center'>
                        <FiTool size='50%' />
                    </Flex>

                </Flex>
            </Flex>

            <Flex bg='white' height={h_franja} w='100%'  border={'1px'}  p={p_franja}>
                <Flex w='60%' direction='column' gap='4' >
                    <Heading>Personalizado a medida para tu negocio</Heading>      
                    <Text>Estamos muy comprometidos con el mundo del taller,
                        estando al día de las necesidades de nuestros clientes,
                        actualiándonos día a día.
                    </Text>
                </Flex>
                <Image src={img5}/>  
            </Flex>

        </Flex>
    )
}
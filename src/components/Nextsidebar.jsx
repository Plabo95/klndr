import React, {useState, useEffect, useContext} from 'react'
import moment from 'moment';
import {Box, Text, Checkbox, Square, Flex, Heading} from '@chakra-ui/react'
import AuthContext from '../auth/AuthContext';
import useApi from '../hooks/useApi';
import eventsApi from '../api/eventsApi';

function Nextsidebar(){
    const [nextEvents, setNextEvents] = useState([])
    const {user, authTokens} = useContext(AuthContext)
    const getNextEventsApi = useApi(eventsApi.getNextEvents);
    
    const updateList = async () => {
        const {data, error} = await getNextEventsApi.request(user,authTokens);
        error? console.log('Error fetching...', error) 
            : setNextEvents(data)
    }

    useEffect(() => {
        updateList()
        },[])

    return(
        <>
        <Box my='5'>
            <Heading size='lg' my='5' >Para hoy: </Heading>
            {nextEvents.map(event=>
            <Flex key={event.id}>
                <Box p='3' my='6' width="280px" boxShadow='xl' borderColor="gray.300" rounded="lg" >
                    <Flex my='5 'align='center' justify='space-between' gap={3}>
                    <Square size='18px' bg={event.service.color} rounded="md"/>  
                    <Text fontSize='xl' >{event.client.car} </Text>
                    <Text fontSize='xl'> {moment(event.start).format("hh:mm")} </Text>
                    </Flex>              
                    <Text fontSize='sm' mt={1}> {event.service.name} </Text>
                </Box>
                <Checkbox colorScheme='gray' ml={4} />
            </Flex>
            )}
        </Box>  
        </>
    )
}
export default Nextsidebar;

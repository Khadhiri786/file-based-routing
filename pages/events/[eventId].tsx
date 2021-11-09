import React from 'react';
import { useRouter } from 'next/router';

const EventDetailsPage=()=>{
    const route=useRouter();
    console.log(route)
    return(<>Event Details Page {route?.query?.eventId}</>);

}

export default EventDetailsPage;
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../dummy-data';
import EventSummary from '../components/event-detail/event-summary';
import EventLogistics from '../components/event-detail/event-logistics';
import EventContent from '../components/event-detail/event-content';


const EventDetailsPage=()=>{
    const router=useRouter();
    const eventId=router.query.eventId;
    const event=getEventById(eventId);
    if(!event)
    {
        return (<p>No Event found</p>)
    }
    console.log(router.query.eventId)
    return(<Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image}/>
        <EventContent>
<p>{event.description} </p>

        </EventContent>

    </Fragment>);

}

export default EventDetailsPage;
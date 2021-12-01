import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import DateIcon  from '../icons/date-icon';
import AddressIcon  from '../icons/address-icon';
import classes from './EventItem.module.css';

const EventItem=(props:any)=>{
    const {title,image,date,location,address,id}=props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });
    const formattedAddress=location.replace(',','\n');
    const exploreLink=`/events/${id}`;
console.log(props);
    return(<li className={classes.item}>
 <Image src={image} alt={title} priority width={250} height={250}/>
      <div className={classes.content}>
           <div>
                <h2>{title}</h2>
            </div>
            <div className={classes.date}>
           <DateIcon/> <time className={classes.time}>{humanReadableDate}</time>
           </div>
           <div className={classes.address}>
            <AddressIcon/>   <address>{formattedAddress}</address>
           </div>
           <div className={classes.actions}>
               <Button link={exploreLink}><span>Explore Events</span></Button>
           </div>
       </div>
    </li>)
   
}
export default EventItem;
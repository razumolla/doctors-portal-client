import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const info = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard bodyInfo="9.30AM-10.30PM" cardTitle="Opening Hours" img={clock} bgColor="bg-gradient-to-r from-secondary to-primary" ></InfoCard>

            <InfoCard bodyInfo="Faridpur,H-4456,Bangladsh" cardTitle="Visit our location" img={marker} bgColor="bg-accent" ></InfoCard>

            <InfoCard bodyInfo="01788-000088" cardTitle="Contact us now" img={phone} bgColor="bg-gradient-to-r from-secondary to-primary" ></InfoCard>
        </div>
    );
};

export default info;
import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date, setDate }) => {
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>

        </div>
    );
};

export default AvailableAppointment;
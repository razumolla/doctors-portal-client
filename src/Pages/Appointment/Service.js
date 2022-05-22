import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span> {slots[0]}</span> :
                            <span className='text-red-500'>Doctor Not Available </span>
                    }
                </p>
                <p>{slots.length} spaces available</p>

                <div class="card-actions justify-center">
                    <button>
                        <label for="Booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">
                            Book Appointment
                        </label>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);

        // to close the modal
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot} </option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
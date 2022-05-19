import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: " Razu Molla",
            review: " Doctors are very good.It is a long established fact that by the readable content of a lot layout.",
            img: people1,
            location: "Bangladesh ",
        },
        {
            _id: 2,
            name: "Samima Khatun",
            review: " Doctors are very good.It is a long established fact that by the readable content of a lot layout.",
            img: people2,
            location: "Italy ",
        },
        {
            _id: 3,
            name: "yang ching Chung",
            review: " Doctors are very good.It is a long established fact that by the readable content of a lot layout.",
            img: people3,
            location: "China",
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl font-bold text-primary'> Testimonials</h4>
                    <h2 className='text-3xl '> What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    > </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
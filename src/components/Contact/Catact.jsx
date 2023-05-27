import { FaStopwatch, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='text-white grid grid-cols-1 md:grid-cols-3 gap-10 md:px-24 p-6 mt-20'>
            <div className="card md:w-80 bg-emerald-950  text-neutral-content">
                <div className="card-body items-center text-center">
                    <FaStopwatch className='text-3xl'/>
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="card md:w-80 bg-red-300  text-neutral-content">
                <div className="card-body items-center text-center">
                    <FaMapMarkerAlt className='text-3xl'/>
                    <h2 className="card-title">Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka 1212, Bangladesh</p>
                </div>
            </div>
            <div className="card md:w-80 bg-emerald-950  text-neutral-content">
                <div className="card-body items-center text-center">
                    <FaPhoneAlt className='text-3xl'/>
                    <h2 className="card-title">Contact Us</h2>
                    <p>+88 01829............</p>
                    <p>+88 01739............</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
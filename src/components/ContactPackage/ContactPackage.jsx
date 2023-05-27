import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPackage = () => {
    return (
        <div className='md:px-24 px-6'>
            <div className="hero md:px-24 md:py-16 rounded-lg bg-emerald-950">
                <div className="hero-content md:flex-row flex-col">
                    <div className="text-center lg:text-left text-white md:w-1/2">
                        <h1 className="text-5xl font-bold">Contact With Us</h1>
                        <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                        <span className='flex items-center gap-6'><FaPhoneAlt /> +880283832984</span>
                        <span className='flex items-center gap-6 mt-5'><FaMapMarkerAlt /> Dhanmondi, Dhaka, Bangladesh</span>
                    </div>
                    <div className="card md:w-2/3 w-full shadow-2xl bg-emerald-950">
                        <div className="card-body">
                            <div className='md:grid grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <input type="text" placeholder="Name" className="input input-bordered bg-emerald-800 text-white" />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" className="input input-bordered bg-emerald-800 text-white" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Mobile Number" className="input input-bordered bg-emerald-800 text-white" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Doctor Name" className="input input-bordered bg-emerald-800 text-white" />
                                </div>
                                <div className="form-control">
                                    <input type="date" placeholder="Date" className="input input-bordered bg-emerald-800 text-white" />
                                </div>
                                <div className="form-control border rounded-lg bg-emerald-800 text-white">
                                    <select className='mt-2 bg-emerald-800 text-white' name="time" id="">
                                        <option value="4pm">10:00 am</option>
                                        <option value="8pm">2:00 pm</option>
                                        <option value="11pm">6:20 pm</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-red-300 py-2  rounded-lg font-semibold text-white ">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPackage;
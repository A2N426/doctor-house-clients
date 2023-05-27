import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaMapMarkerAlt, FaCommentDollar, FaColumns } from 'react-icons/fa';

const Doctors = () => {
    return (
        <div className='md:px-24 p-6'>
            <h1 className="text-center text-4xl font-bold">Our Expert Doctors</h1>
            <p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br /> inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className='md:grid grid-cols-3 gap-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-14.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=sph" alt="Doctor Img" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP - Senior Physiotherapist</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={5}
                            readOnly
                        />
                        <div className='mt-3'>
                            <span className='flex items-center gap-2'><FaMapMarkerAlt/>Dhanmondi, Dhaka, Bangladesh</span>
                            <span className='flex items-center gap-2'><FaColumns/>Available On Mon, 22 December</span>
                            <span className='flex items-center gap-2'><FaCommentDollar/>$15</span>
                        </div>
                        <button className="mt-3 outline-2 outline py-2 font-semibold hover:bg-red-300 hover:text-white text-red-300 rounded-lg w-full outline-red-300">View Profile</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/medium-shot-doctor-with-crossed-arms_23-2148868176.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=sph" alt="Doctor Img" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP - Senior Physiotherapist</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={5}
                            readOnly
                        />
                        <div className='mt-3'>
                            <span className='flex items-center gap-2'><FaMapMarkerAlt/>Dhanmondi, Dhaka, Bangladesh</span>
                            <span className='flex items-center gap-2'><FaColumns/>Available On Mon, 22 December</span>
                            <span className='flex items-center gap-2'><FaCommentDollar/>$15</span>
                        </div>
                        <button className="mt-3 outline-2 outline py-2 font-semibold hover:bg-red-300 hover:text-white text-red-300 rounded-lg w-full outline-red-300">View Profile</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=sph" alt="Doctor Img" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP - Senior Physiotherapist</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={5}
                            readOnly
                        />
                        <div className='mt-3'>
                            <span className='flex items-center gap-2'><FaMapMarkerAlt/>Dhanmondi, Dhaka, Bangladesh</span>
                            <span className='flex items-center gap-2'><FaColumns/>Available On Mon, 22 December</span>
                            <span className='flex items-center gap-2'><FaCommentDollar/>$15</span>
                        </div>
                        <button className="mt-3 outline-2 outline py-2 font-semibold hover:bg-red-300 hover:text-white text-red-300 rounded-lg w-full outline-red-300">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
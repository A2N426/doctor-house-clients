

const Banner = () => {
    return (
        <div className='bg-emerald-950 px-4 md:px-16 text-white md:h-[450px] h-[600px] md:flex justify-between items-center'>
            <div className="md:w-1/2 space-y-5">
                <h1 className="text-5xl font-semibold">Your Best Medical <br /> Help Center</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt delectus, tempore eligendi sunt ipsa?</p>
                <button className="btn bg-red-300">All Service</button>
            </div>
            <div className="md:w-1/2 md:top-0 top-10 w-full relative">
                <div className="md:w-56 border-8 border-white w-40 md:mx-0 mx-3 md:absolute md:right-14">
                    <img src="https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                </div>
                <div className="md:w-56 w-40 md:mx-0 mx-52 md:-mt-0 -mt-28 md:absolute md:left-14 border-8 border-white">
                    <img src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                </div>
                <div className="md:absolute w-40 md:mx-0 mx-28 md:-top-28 md:-mt-0 -mt-2 md:right-52 md:w-52 border-8 border-white">
                    <img src="https://img.freepik.com/free-photo/portrait-friendly-male-doctor_171337-1536.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
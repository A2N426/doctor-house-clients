import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Clients = () => {

    return (
        <div className="mt-20 md:px-24 p-6">
            <h1 className="text-center text-5xl font-bold">What Our Patients Says</h1>
            <p className="text-center mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="mt-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="bg-slate-100  rounded-lg md:p-6">
                            <div className="md:flex gap-4">
                                <img className="md:w-12 rounded-full border border-red-300" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                                <div>
                                    <h1 className="font-semibold">Awlad Hossain</h1>
                                    <p>Production Designer</p>
                                </div>
                            </div>
                            <p className="mt-3">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-slate-100 rounded-lg md:p-6">
                            <div className="md:flex gap-4">
                                <img className="md:w-12 rounded-full border border-red-300" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                                <div>
                                    <h1 className="font-semibold">Awlad Hossain</h1>
                                    <p>Production Designer</p>
                                </div>
                            </div>
                            <p className="mt-3">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-slate-100 rounded-lg md:p-6">
                            <div className="md:flex gap-4">
                                <img className="md:w-12 rounded-full border border-red-300" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                                <div>
                                    <h1 className="font-semibold">Awlad Hossain</h1>
                                    <p>Production Designer</p>
                                </div>
                            </div>
                            <p className="mt-3">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-slate-100 rounded-lg md:p-6">
                            <div className="md:flex gap-4">
                                <img className="md:w-12 rounded-full border border-red-300" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                                <div>
                                    <h1 className="font-semibold">Awlad Hossain</h1>
                                    <p>Production Designer</p>
                                </div>
                            </div>
                            <p className="mt-3">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-slate-100 rounded-lg md:p-6">
                            <div className="md:flex gap-4">
                                <img className="md:w-12 rounded-full border border-red-300" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                                <div>
                                    <h1 className="font-semibold">Awlad Hossain</h1>
                                    <p>Production Designer</p>
                                </div>
                            </div>
                            <p className="mt-3">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Clients;
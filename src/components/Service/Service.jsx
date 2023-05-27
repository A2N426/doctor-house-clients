import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Service = () => {
    return (
        <div className='px-6 md:flex gap-10 md:px-24 mt-20 '>
            <img className='rounded-lg md:w-1/2' src="https://img.freepik.com/free-photo/portrait-professional-medical-worker-posing-picture-with-arms-folded_1098-19293.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
            <div className='md:w-1/2'>
                <h1 className="text-3xl font-bold">Our Services</h1>
                <p className='mt-3 md:text-start text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='mt-4'>
                    <Tabs>
                        <TabList className="flex items-center border-2 rounded-lg p-3 justify-between">
                            <Tab>Cavity Protection</Tab>
                            <Tab>Cosmetic Density</Tab>
                            <Tab>Oral Surgery</Tab>
                        </TabList>

                        <TabPanel>
                            <img className='mt-5  md:w-2/3 rounded-xl' src="https://img.freepik.com/free-photo/white-teeth_144627-6526.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=sph" alt="" />
                            <h2 className='text-3xl font-semibold mt-5'>Electro Gastrology Therapy</h2>
                            <p className='mt-3 md:text-start text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                            <p className='mt-3 md:text-start text-center'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className='md:text-start text-center'>
                                <button className=' md:mt-3 outline outline-2 px-3 py-2 rounded-md text-red-300 hover:bg-red-300 hover:text-white font-semibold outline-red-300 mt-3'>MORE DETAILS</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <img className='mt-5  md:w-2/3 rounded-xl' src="https://img.freepik.com/free-vector/human-teeth-model-white-background_1308-108364.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=sph" alt="" />
                            <h2 className='text-3xl font-semibold mt-5'>Electro Gastrology Therapy</h2>
                            <p className='mt-3 md:text-start text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                            <p className='mt-3 md:text-start text-center'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className='md:text-start text-center'>
                                <button className=' md:mt-3 outline outline-2 px-3 py-2 rounded-md text-red-300 hover:bg-red-300 hover:text-white font-semibold outline-red-300 mt-3'>MORE DETAILS</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <img className='mt-5  md:w-2/3 rounded-xl' src="https://img.freepik.com/free-photo/white-teeth_144627-6525.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=sph" alt="" />
                            <h2 className='text-3xl font-semibold mt-5'>Electro Gastrology Therapy</h2>
                            <p className='mt-3 md:text-start text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                            <p className='mt-3 md:text-start text-center'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className='md:text-start text-center'>
                                <button className=' md:mt-3 outline outline-2 px-3 py-2 rounded-md text-red-300 hover:bg-red-300 hover:text-white font-semibold outline-red-300 mt-3'>MORE DETAILS</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Service;
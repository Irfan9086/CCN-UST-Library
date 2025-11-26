import newsEvent from '../assets/news-event-01.jpg'
import newsEvent1 from '../assets/news-event-02.jpg'
import newsEvent2 from '../assets/news-event-03.jpg'
import { Calendar, Clock, MapPin } from 'lucide-react';
const Event = () => {
    return (
        <div className=" p-7  flex flex-col items-center">
             <h4 className='text-2xl font-semibold '>News & Events</h4>
             <p className='text-sm my-4'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
             <div className='bg-slate-100 text-black'>
                  <div className='flex flex-col lg:flex-row'>
                {/* Left Image Section */}
                <div className="w-full lg:w-[50%]">
                    <img className="w-full h-auto" src={newsEvent} alt="Event Image" />
                </div>

                {/* Right Content Section */}
                <div className="w-full lg:w-[50%] flex flex-row justify-center items-start px-4 py-6">
                    <div className='p-4'>
                        <h6 className="text-sm font-semibold mb-2">Event</h6>
                        <div>
                                  <div className='flex gap-3 items-center'>
            <div className='flex items-center'>
                <Calendar className="text-gray-500 mr-2" />
                <p> July 25, 2016 </p>
            </div>
        
            <div className='flex items-center'>
                <MapPin className="text-gray-500 mr-2" />
                <p> New York, USA</p>
            </div>
        </div>
                            <h6 className="text-xl font-semibold mb-4">It uses a dictionary of over 200 Latin words</h6>
                            <p className="mb-4">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                            <button className="bg-indigo-500 text-white py-2 px-4 rounded">READ MORE</button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="">
                        <img className='w-[900px] h-[100%]' src={newsEvent1} alt="Event Details" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
    
                {/* Left Image Section */}
                <div className="w-full lg:w-[50%]">
                   <h6 className='text-sm font-semibold mb-2'>EVENT</h6>
                <div className='flex gap-3 items-center'>
            <div className='flex items-center'>
                <Calendar className="text-gray-500 mr-2" />
                <p> July 25, 2016 </p>
            </div>
            <div className='flex items-center'>
                <Clock className="text-gray-500 mr-2" />
                <p> 10:15 AM - 10:15 PM</p>
            </div>
            <div className='flex items-center'>
                <MapPin className="text-gray-500 mr-2" />
                <p> New York, USA</p>
            </div>
        </div>
                  <h6>It uses a dictionary of over 200 Latin word</h6>
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
                  <button>Read more</button>
                </div>

                {/* Right Content Section */}
                <div className="w-full lg:w-[50%] flex flex-row justify-center items-start gap-4 px-4 py-6">
                   

                    {/* Right Image Section */}
                    <div className="mt-4 lg:mt-0 ">
                        <img className='w-[900px] h-[100%]' src={newsEvent2} alt="Event Details" />
                    </div>
                     <div>
                        <h6 className="text-sm font-semibold mb-2">Event</h6>
                        <div>
                                  <div className='flex gap-3 items-center'>
            <div className='flex items-center'>
                <Calendar className="text-gray-500 mr-2" />
                <p> July 25, 2016 </p>
            </div>
            <div className='flex items-center'>
                <MapPin className="text-gray-500 mr-2" />
                <p> New York, USA</p>
            </div>
        </div>
                            <h6 className="text-xl font-semibold mb-4">It uses a dictionary of over 200 Latin words</h6>
                            <p className="mb-4">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                            <button className="bg-indigo-500 text-white py-2 px-4 rounded">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
             </div>
        </div>
    );
};

export default Event;

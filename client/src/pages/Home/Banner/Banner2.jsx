import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaRegFileAlt, FaHeadphones, FaRocket, FaArrowRight } from 'react-icons/fa';
const Banner2 = () => {
    return (
        <section className="bg-white  min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <div className="h-1 w-12 bg-red-600 mr-3"></div>
                            <span className="uppercase font-semibold text-lg">Top Categories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Learn new skills to go ahead for your career
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            I'll explain that it's going to be tougher, unless it's a big problem, they're just something that needs an option that this one.                        </p>
                        <Link to="/learn-more" className="w-[40%] text-center bg-[#FF1949] hover:bg-[#385777] text-white font-bold py-3 px-8 rounded-md flex items-center justify-center">
                            Learn More <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 border border-gray-200 rounded-lg text-center">
                            <FaChalkboardTeacher className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Expert Teacher</h3>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-lg text-center">
                            <FaRegFileAlt className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Quality Education</h3>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-lg text-center">
                            <FaHeadphones className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Life Time Support</h3>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-lg text-center">
                            <FaRocket className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">HD Video</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner2;
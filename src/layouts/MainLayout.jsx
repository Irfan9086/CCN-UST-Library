import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {
   

    return (
       
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
                <Navbar />
                <main className="flex-grow container mx-auto ">
                    <Outlet />
                </main>
                <Footer />
            </div>
      
    );
};

export default MainLayout;

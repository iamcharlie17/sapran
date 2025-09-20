import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./hero/Hero";


const Dashboard = () => {
    return (
        <div className="max-w-[2000px] mx-auto">
            {/* Header */}
            <Header />
            <Navbar />
            <Hero />

        </div>
    );
};

export default Dashboard;
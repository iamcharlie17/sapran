'use client';

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "./hero/Hero";
import WhoWeAre from "./who-we-are/WhoWeAre";
import { useLang } from "@/providers/LangProvider";


const Dashboard = () => {
    const { lang } = useLang()
    return (
        <div className="max-w-[2000px] mx-auto">
            {/* Header */}
            <Header />
            <Navbar />
            <Hero/>
            <WhoWeAre />
        </div>
    );
};

export default Dashboard;
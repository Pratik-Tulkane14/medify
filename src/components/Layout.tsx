import React from "react";
import Notice from "./Notice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Offers from "./Offers";
import Specialisation from "./Specialisation";
import Blog from "./Blog";
import Families from "./Families";
import Faq from "./Faq";
import MedicalSpecialist from "./MedicalSpecialist";
import PatientCaring from "./PatientCaring";
import Download from "./Download";
import Hero from "./Hero";

const Layout = () => {
    return (
        <div>
            <Notice />
            <Navbar />
            
            <Faq />
            <Download />
            <Footer />
        </div>
    );
};

export default Layout;

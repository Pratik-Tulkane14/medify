import React from "react";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Specialisation from "../components/Specialisation";
import Blog from "../components/Blog";
import Families from "../components/Families";
import MedicalSpecialist from "../components/MedicalSpecialist";
import PatientCaring from "../components/PatientCaring";

const Router = () => {
    return (
        <div>
            <Hero />
            <Offers />
            <Specialisation />
            <Blog />
            <Families />
            <MedicalSpecialist />
            <PatientCaring />
        </div>
    );
};

export default Router;

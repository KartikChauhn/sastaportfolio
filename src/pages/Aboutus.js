import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

//animation imports 
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Aboutus = () =>{
    return (
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show' >
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}

export default Aboutus;
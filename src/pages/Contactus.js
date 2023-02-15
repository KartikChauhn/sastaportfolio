
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Contactus = () =>{
    return (
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show' >
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default Contactus;
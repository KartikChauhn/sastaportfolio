import { easeInOut } from "framer-motion";

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y:300
    },
    show:{
        opacity: 1,
        y:0,
        // background:"#fff",
        transition: {
            duration:0.8,
            transition: easeInOut,
        },

    },
    exit:{
        opacity: 0,
        y:300,
        transition:{
            duration :0.8,
            transition: easeInOut,
        }
    }
    
}
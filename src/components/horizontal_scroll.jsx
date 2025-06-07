import React from "react";
import "./horizontal_scroll.css";
import {motion, useScroll, useTransform} from "framer-motion";


// export function Carousel() {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({target: targetRef});
//     const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

//     return (
//          <div className="media-container" ref={targetRef}>
//             <motion.div style={{x}}>
//                 <img src="/images/pizza.avif" className="media-element" alt="photo1"/>
//                 <img src="/images/sushi.avif" className="media-element" alt="photo2"/>
//                 <img src="/images/deneve.avif" className="media-element" alt="photo3"/>
//             </motion.div>
//         </div>
//     )
// }

export function Carousel() {
    return (
         <div className="media-container">
            <img src="/images/pizza.avif" alt="photo1"/>
            <img src="/images/sushi.avif" alt="photo2"/>
            <img src="/images/deneve.avif" alt="photo3"/>
        </div>
    )
}
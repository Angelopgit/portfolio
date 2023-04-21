import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


const HelloMessage = () => {
    return(
      <div id= "main" class='main '> 
      <motion.div 
      className="containermain"
      animate={{ y: [0,10, 0], transition: { duration: 1.5, repeat:Infinity , translateX: "-50%",
      translateY: "-50%",} }}
      whileHover={{ scale: 0.99999 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
<div id="typehead" class="container mx-auto">
    <div id="type" className="intro hover:animate-pulse cursor:point">
      <h1><Typewriter options={{
        autoStart: true,
        loop: true,
        delay: 25,
        strings:["Hello! ", "My name is Cub.",
        "I'm learning Software Development.",
      "Welcome to my Portfolio."],
      }}
        /></h1>
    </div>
    </div>
    </motion.div>
    </div>
    );
};

export default HelloMessage;
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


const HelloMessage = () => {
    return(
      <div id= "main" class='container'> 
      <motion.div 
      className="container shadow-lg overflow-auto before:blur-sm rounded-md w-10 md:w-10 lg:w-10"
      animate={{ y: [0,10, 0], transition: { duration: 1.5, repeat:Infinity , translateX: "-50%",
      translateY: "-50%",} }}
      whileHover={{ scale: 0.99999 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
<div id="typehead" class="container shadow-lg overflow-auto before:blur-sm rounded-md w-16 md:w-32 lg:w-48">
    <div id="type" className="intro hover:animate-pulse cursor:point">
      <h1><Typewriter options={{
        autoStart: true,
        loop: true,
        delay: 25,
        strings:["Hello! ", "My name is Angelo.",
        "I'm a learning Software Developer.",
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
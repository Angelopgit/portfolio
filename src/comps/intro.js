import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


const HelloMessage = () => {
    return(
      <motion.div
      className="container shadow-lg overflow-auto before:blur-sm rounded-md"
      animate={{ y: [0,10, 0], transition: { duration: 1.5, repeat:Infinity } }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
<div class="container shadow-lg overflow-auto before:blur-sm rounded-md">
    <div className="intro hover:animate-pulse cursor:point">
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
    );
};

export default HelloMessage;
import React from 'react';
import Typewriter from 'typewriter-effect';

const HelloMessage = () => {
    return(
<div class="container shadow-lg overflow-auto before:blur-sm rounded-md">
    <div className="intro hover:animate-pulse cursor:point">
      <h1><Typewriter options={{
        autoStart: true,
        loop: true,
        delay: 25,
        strings:["Hello! ", "My name is Cub.",
        "I am a learning Software Engineer.",
      "Welcome to my Portfolio."],
      }}
        /></h1>
    </div>
    </div>
    );
};

export default HelloMessage;
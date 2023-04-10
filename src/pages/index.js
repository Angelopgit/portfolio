// pages/index.js
import Typewriter from 'typewriter-effect';
import React from 'react';


const Home = () => {
  return (
<section>

<div class="container">
    <div className="intro">
      <h1><Typewriter options={{
        autoStart: true,
        loop: true,
        delay: 35,
        strings:["Hello!", "My name is Cub.",
        "I am a learning Software Engineer.",
      "Welcome to my Portfolio."],
      }}
      /></h1>
    </div>
    </div>
 </section>
  )
}



export default Home
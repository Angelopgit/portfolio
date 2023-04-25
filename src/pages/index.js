// pages/index.js
import React from 'react';
import TeamCard from '@/comps/team';
import HelloMessage from '@/comps/intro';
import introHeader from '@/comps/selfie';
import { Container } from 'postcss';
import { motion } from "framer-motion";


const Home = () => {
  return (                 
  <div class="container3">  
  <div id="mainintro" className="h-screen w-full bg-gradient-to-r from-gray-950 to-gray-800 overflow:hidden duration-500 ${show ? 'opacity-100' : 'opacity-0' space-y-10">
  <HelloMessage/>
 
   
 <div id="profileholder" className="">
 <img src="https://i.imgur.com/g5s02Lu.jpg" alt="Angelo" class="h-40 w-40 rounded-full shadow-lg border-4 bg-blend-lighten mx-auto object-cover hover:border-blue-400 hover:animate-pulse space-x-2"/>
 </div>
 <b>
  <div id="buttons" className="text-white text-center text-2xl font-bold space-x-5 space-y-8">
  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  LinkedIn
</button>
<button class="bg-gray-950 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  GitHub
</button>

  </div>
 </b>
 
    </div>
    
 </div>
  );
};

export default Home


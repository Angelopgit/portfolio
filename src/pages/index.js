// pages/index.js
import React from 'react';
import TeamCard from '@/comps/team';
import HelloMessage from '@/comps/intro';
import { Container } from 'postcss';



const Home = () => {
  return (
  <div class="container3">
  <div id="mainintro" className="h-screen w-full bg-gradient-to-r from-gray-950 to-gray-800 overflow:hidden ">
  <HelloMessage/>

    </div>
 </div>
  );
};



const TeamPage = () => {
  return (
    <div id="card1" className="h-200 w-200 hover:animate-pulse">
      <TeamCard 
        image="https://files.facepunch.com/maxlebled/1b1211b1/citizen_header.jpg"
        name="C# Game Project"
        title="CEO"
        phone="555-555-1234"
        project={<a href="https://github.com/your-username">Link to my GitHub</a>}
        />
      
</div>
  )
}
export default Home


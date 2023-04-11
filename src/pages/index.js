// pages/index.js
import React from 'react';
import TeamCard from '@/comps/team';
import HelloMessage from '@/comps/intro';



const Home = () => {
  return (
  
  <div className="container">
 
  <title>Portfolio</title>
  <link rel='icon' href='/favicon.ico' />
 
  <HelloMessage/>
  <section>
    <TeamPage/>
  </section>
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


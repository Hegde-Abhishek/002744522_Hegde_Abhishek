import React from 'react';
import Card from '../Component/Cards';
import img from "../Main/profile.png";
import '../Main/MainPage';

const about = [
    {
      id: 1,
      title: 'Abhishek Hegde',
      content: 'Software Engineer with 3+ years of experience in UI-UX and API development with a demonstrated history of working in IT industry.',
      image: img,
    },
  ];
  
  const About = () => {
    return (
      <div class="body">
        <h1 style={{ marginLeft:"20px" }}>About Page</h1>
        <div>
          {about.map((about) => (
            <Card title={about.title} content={about.content} image={about.image} loc={about.location} key={about.key}/>
          ))}
        </div>
      </div>
    );
  };

export default About;
import React from 'react';
import Card from '../Component/Cards';
import '../Main/MainPage';
import image from "../Main/image.jpg";

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    content: 'We are looking for a software engineer to join our team.',
    image: image,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    content: 'We are looking for a frontend developer to join our team.',
    image: image,
  },
  {
    id: 3,
    title: 'Backend Developer',
    content: 'We are looking for a backend developer to join our team.',
    image: image,
  },
];

const Jobs = () => {
  return (
    <div class="body">
      <h1 style={{ marginLeft:"20px" }}>Jobs Page</h1>
      {/* <Card title="Jobs" description="Check out our job openings below:" /> */}
      <div>
        {jobs.map((job) => (
          <Card title={job.title} content={job.content} image={job.image} loc={job.location} key={job.key}/>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

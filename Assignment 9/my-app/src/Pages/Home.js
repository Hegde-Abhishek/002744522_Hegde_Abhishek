import React from 'react';
import { Container } from "react-bootstrap";
import Card from '../Component/Cards';
import image from "../Main/exp.jpg";
import img from "../Main/pf.jpg";
import '../Main/MainPage';

const datas = [
    {
      id: 1,
      title: 'UI-UX | API development',
      content: <div><p>Legato Health Technologies (Oct 2020 - Aug 2022)</p> <br/><p>Novel Office (Aug 2019 - Sept 2020)</p></div>,
      image: image,
    },
  ];

function Home(){
    return(
        <div class="body" style={{backgroundColor:'#fff5d3'}}>
            <div style={{ marginLeft:"60px" }}>
            <h1>Welcome</h1>
        <Container>
        <div class="container">

                <h4 class="mb-4">
                  This web application is an example of portfolio of Abhishek Hegde, <br/>developed through
                  react components and routers, and nodejs for the backend.<br/>
                  <a href="https://www.linkedin.com/in/hegde-abhishek/">Click here</a> to see the LinkedIn profile.
                </h4>
                <div style={{ float:'right', marginTop:'-100px'}}>
                    {datas.map((data) => (
                        <Card title={data.title} content={data.content} image={data.image} loc={data.location} key={data.key} />
                    ))}
                </div>
                <img src={img} alt="An example " style={{width:'700px',height:'400px'}}/>
        </div>
      </Container>
    </div>
        </div>
    )
}

export default Home;
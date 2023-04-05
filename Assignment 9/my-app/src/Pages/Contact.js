import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Card from '../Component/Cards';
import image from "../Main/img.jpg";


const jobs = [
    {
        id: 1,
        //   content: 'We are looking for a software engineer to join our team.',
        image: image,
    },
];

function Contact() {
    const linkedinUrl = 'https://www.linkedin.com/in/hegde-abhishek/';

    return (
        <Container>
            <Row>
                <div style={{backgroundColor:'#fff5d3'}}>
                    <div class="container" style={{ marginLeft: "60px" }}>

                        <h3>
                            Get in touch with me for more details.
                        </h3>


                        <h5 class="fw-medium">hegdeabhishek07@gmail.com</h5>

                        <h5 class="fw-medium">+1 (123) 789 4564</h5>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <div>
                                {jobs.map((job) => (
                                    <Card image={job.image} loc={job.location} key={job.key} />
                                ))}
                            </div>
                        </a>

                    </div>
                </div>

                {/* </div> */}

            </Row>
        </Container>

    )
}

export default Contact;
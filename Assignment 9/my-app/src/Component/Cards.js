// import React from 'react';
// import './Card.css';

// const Card = (props) => {
//   return (
//     <div className="card">
//       {props.imageUrl && (
//         <img src={props.imageUrl} alt={props.title} className="card-image" />
//       )}
//       <h2 className="card-title">{props.title}</h2>
//       <p className="card-description">{props.description}</p>
//     </div>
//   );
// };

// export default Card;
import React from 'react';
import './Cards.css';
import { Card, Container, Button } from 'react-bootstrap';

const Cards = (props) => {
  
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-image" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-content">{props.content}</Card.Text>
          <Button variant="primary">Click to know more</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cards;
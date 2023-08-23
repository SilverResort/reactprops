import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
// import Players from './Players'

const Player = ({data}) => {
    return (
    <div>
      <div className="cartePilote" style={{color:"red"}}> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.imgUrl} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>Age : {data.age}</Card.Text>
          <Card.Text>Nationality : {data.nationality}</Card.Text>
          <Card.Text>Team : {data.team}</Card.Text>
          <Card.Text>Number : {data.id}</Card.Text>
          <div style={{display:'flex', justifyContent:'center'}}>
          <ReactStars count={5} value={data.rating} size={24} color2={'#ffd700'} edit={false} />
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}
Player.defaultProps = {
    name: "Pilote",
    age: "Age du pilote",
    nationality: "Nationalité du pilote",
    team:"Ecurie du pilote",
    id: "Numéro du pilote",
};

export default Player
import React from "react"
import {Card, CardHeader, ListGroup, ListGroupItem,} from "reactstrap"

const ApartmentIndex = ({mockApartmentsDataPass}) => {


  return (
    <>
    <h3>ApartmentIndex</h3>
    {mockApartmentsDataPass.map((mockApartments, index)=>{
    
    
  
return (
  <>
  <Card
  style={{
    width: '18rem'
  }}
    >
  <CardHeader>
    Apartments Avaliable
  </CardHeader>
  <ListGroup flush>

  <img
    alt="Card"
    src={mockApartments.image}
  />

    <ListGroupItem>
      Pricing: ${mockApartments.price} 
    </ListGroupItem>
    <ListGroupItem>
      Location: {mockApartments.city} , {mockApartments.state} 
    </ListGroupItem>
    <ListGroupItem>
      Bathrooms: {mockApartments.bathrooms} 
    </ListGroupItem>
    <ListGroupItem>
      Bedrooms: {mockApartments.bedrooms} 
    </ListGroupItem>
  </ListGroup>
</Card>
  </>
)
})}

</>
)}

export default ApartmentIndex

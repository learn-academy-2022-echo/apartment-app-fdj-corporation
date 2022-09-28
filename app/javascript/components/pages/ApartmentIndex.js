import React from "react"
import {Card, CardHeader, ListGroup, ListGroupItem,} from "reactstrap"

const ApartmentIndex = ({mockApartmentsDataPass}) => {

console.log(mockApartmentsDataPass)
  return (
  <div>
      <div>
    <h1>See All Avaliable Apartments</h1>
      </div>
    {mockApartmentsDataPass.map((mockApartment)=>{
        return (
            <>
              <Card style={{width: '18rem'}}
                  >
                <CardHeader>
                  Apartments Avaliable
                </CardHeader>
                <ListGroup flush>
                <img
                  alt="Card"
                  src={mockApartment.image}
                />
                  <ListGroupItem>
                  {mockApartment.street} , {mockApartment.city}
                  </ListGroupItem>
                  <ListGroupItem>
                    {mockApartment.price} 
                  </ListGroupItem>
                  <ListGroupItem>
                    Bathrooms: {mockApartment.bathrooms} 
                  </ListGroupItem>
                  <ListGroupItem>
                    Bedrooms: {mockApartment.bedrooms} 
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </>
)
})}
</div>
)}

export default ApartmentIndex

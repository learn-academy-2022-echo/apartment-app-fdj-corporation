import React from "react"
import {Card, CardHeader, ListGroup, ListGroupItem,} from "reactstrap"


const ApartmentIndex = ({mockApartmentsDataPass}) => {
// console.log(mockApartmentsDataPass)
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
                      Location:{mockApartment.street} , {mockApartment.city}, {mockApartment.state}
                    </ListGroupItem>
                    <ListGroupItem>
                      Manager Contact Information:{mockApartment.manager} , {mockApartment.email}
                    </ListGroupItem>
                    <ListGroupItem>
                      Price: {mockApartment.price} 
                    </ListGroupItem>
                    <ListGroupItem>
                      Bathrooms: {mockApartment.bathrooms} 
                    </ListGroupItem>
                    <ListGroupItem>
                      Bedrooms: {mockApartment.bedrooms} 
                    </ListGroupItem>
                    <ListGroupItem>
                      Pets Allowed: {mockApartment.pets} 
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </>
          )
      })}
  </div>
)}

export default ApartmentIndex

import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const ApartmentNew = ({createApartment}) => {
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewApartment({...newApartment, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createApartment(newApartment)
  }
  return (
    <>
      <h1>Add a New Listing Below:</h1>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input type="text" name="street" placeholder="Enter Street Name" onChange={handleChange} value={newApartment.street}/>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" placeholder="Enter City" onChange={handleChange} value={newApartment.city}/>
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" placeholder="Enter State" onChange={handleChange} value={newApartment.state}/>
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input type="text" name="manager" placeholder="Enter Manager Name" onChange={handleChange} value={newApartment.manager}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Manager Email</Label>
          <Input type="text" name="email" placeholder="Enter Manager Email" onChange={handleChange} value={newApartment.email}/>
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" placeholder="Enter Price" onChange={handleChange} value={newApartment.price}/>
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input type="text" name="bedrooms" placeholder="Enter Bedrooms"/>
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input type="text" name="bathrooms" placeholder="Enter Bathrooms" onChange={handleChange} value={newApartment.bathrooms}/>
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets Allowed?</Label>
          <Input type="text" name="pets" placeholder="Enter Yes or No" onChange={handleChange} value={newApartment.pets}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Upload Image</Label>
          <Input type="text" name="image" placeholder="Enter Image URL" onChange={handleChange} value={newApartment.url}/>
        </FormGroup>
      </Form>
      <NavLink to="/apartmentshow">
        <Button color="primary" onClick={handleSubmit} name="submit">
          Submit Listing
        </Button>
      </NavLink>
    </>
  )
}

export default ApartmentNew

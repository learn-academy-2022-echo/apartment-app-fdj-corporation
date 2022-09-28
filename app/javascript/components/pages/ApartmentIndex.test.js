import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import {BrowserRouter} from 'react-router-dom'
import mockApartmentsData from '../mockApartments'

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const header = document.createElement("h3")
   render (
    <BrowserRouter>
      <ApartmentIndex mockApartmentsDataPass={mockApartmentsData}/>
    </BrowserRouter>
   )

   mockApartmentsData.forEach((apartment) => {
    const apartmentimage = screen.getByText(apartment.image)
    expect(apartmentimage).toBeInTheDocument()
   })


  
  })
})

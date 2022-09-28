import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import {BrowserRouter} from 'react-router-dom'
import mockApartmentsData from '../mockApartments'
import ApartmentNew from "./ApartmentNew"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
  const div = document.createElement("div")
   render(
      <ApartmentIndex mockApartmentsDataPass={mockApartmentsData}/>, div
    )
    expect(screen.getByText("See All Avaliable Apartments")).toBeInTheDocument()
  })

  it("renders the card Information", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
      <ApartmentIndex mockApartmentsDataPass={mockApartmentsData}/>
      </BrowserRouter>, div
    )
    const li = screen.getAllByRole('img', {name: "Card"})
    expect(li).toBeInTheDocument
    screen.debug(li)
    })
})


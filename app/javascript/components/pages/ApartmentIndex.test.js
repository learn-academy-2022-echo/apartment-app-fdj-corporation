import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import {BrowserRouter} from 'react-router-dom'
import mockApartmentsData from '../mockApartments'

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
  const div = document.createElement("div")
   render(
      <ApartmentIndex mockApartmentsDataPass={mockApartmentsData}/>, div
    )
    expect(screen.getByText("See All Avaliable Apartments")).toBeInTheDocument()

   })
  })

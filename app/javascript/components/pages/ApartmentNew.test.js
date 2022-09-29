import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"
import { BrowserRouter } from 'react-router-dom'


describe("<ApartmentNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )
    expect(screen.getByText("Add a New Listing Below:")).toBeInTheDocument()
  })
  it("renders textbox for City", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )
    expect(screen.getByText("City")).toBeInTheDocument()
    })
})

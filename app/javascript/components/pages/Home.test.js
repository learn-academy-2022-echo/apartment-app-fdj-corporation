import React from "react"
import { render, screen, userEvent} from "@testing-library/react"
import Home from "./Home"
import BrowserRouter from 'react-router-dom'


describe("<Home />", () => {
  it("renders without crashing", () => {
    render(<Home />)
    expect(screen.getByText("Welcome the top Apartment Management Team")).toBeInTheDocument()
  })
  it("renders a button to sign in", () => {
    render(
      <Home />
    )
    expect(screen.getByText("Sign In")).toBeInTheDocument()
  })
})

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Home"))
    // userEvent.click(screen.getByText("Create a listings"))
    //  userEvent.click(screen.getByText("My listings"))
    userEvent.click(screen.getByText("Show all apartments"))
    expect(screen.getByText("Home")).toBeInTheDocument()
    //  expect(screen.getByText("Create a listings")).toBeInTheDocument()
    //  expect(screen.getByText("My listings")).toBeInTheDocument()
    expect(screen.getByText("Show all apartments")).toBeInTheDocument()

  })
})

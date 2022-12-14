import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartmentsData from './mockApartments'

const App = (props) => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const createApartment = (apartment) => {
    console.log(apartment)
  }

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props}/>} />
        <Route path="/apartmentindex" element={<ApartmentIndex mockApartmentsDataPass={mockApartmentsData} />} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

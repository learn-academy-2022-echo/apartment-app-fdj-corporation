import React from "react"
import {Button, NavItem, NavLink} from "reactstrap"

const Home = (props) => {
  return (
    <>
    <h1>Welcome the top Apartment Management Team</h1>
    {props.logged_in && (
      <>
       <h1>Welcome Back!</h1>
        <p>Please take a look at all our available apartments for lease. As a member of our website, you have the ability to save your listings. See them, head to your "My Listing".</p>
        <Button>
          {/* Needs to link to the index that is ony belongs to them */}
          <a href="/apartmentindex">
              View Your Listings
            </a>
          </Button>
          <Button>
            <a href="/apartmentindex">
              All Listings
            </a>
          </Button>
      </>
      )}
      {!props.logged_in && (
        <>
          <h1>Hello, it's nice to meet you!</h1>
            <p>Proud serving our customers for over 50 years. Please take a look at all our available apartments for lease. For a quick and easy way to save your information, create an account!</p>
              
                <Button>
                  <a href="/users/sign_up">
                    Sign Up
                  </a>
                </Button>
                <Button>
                  <a href="/users/sign_in">
                    Sign In
                  </a>
                </Button>
              
          </>
      )}
  </>
  )
}
export default Home

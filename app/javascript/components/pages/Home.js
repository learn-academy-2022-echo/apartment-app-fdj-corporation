import React from "react"
import {Button, NavItem, NavLink} from "reactstrap"

const Home = (props) => {
  return (
    <>
    <div className="Body">
        <h1>Welcome the top Apartment Management Team</h1>
        <p>Proud serving our customers for over 50 years</p>
    </div>

    
    <h3>Home</h3>
    {props.logged_in && (
      <>
       <h3>Welcome to PDJ Corporation</h3>
       <NavItem>
        <Button>
        <NavLink to = {sign_in_route}>
            Please Sign in
          </NavLink>
          </Button>
        </NavItem>
        </>
      )}
      {!props.logged_in && (
        
       <NavItem>
        <Button>
          <NavLink to = "/apartmentindex" className ="nav-link">
            Please sign in
          </NavLink>
          </Button>

          <Button>
          <NavLink to = {`/users/sign_up`}>
            Please Sign up
          </NavLink>
          </Button>

        </NavItem>
      )}
  </>
   
  )
}

export default Home

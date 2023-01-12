import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import Navlocker from "./Navlocker";

export default function Navhead() {
    const [isOpen, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const changeBg = () => {
        window.scrollY >= 60 ? setShowNav(true) : setShowNav(false);
    }
    useEffect (() => {
        changeBg()
        window.addEventListener('scroll', changeBg)
        return ()=>{
            window.removeEventListener('scroll', changeBg)
        }
    },[] );
   

    const defaultStyle = 'position-fixed w-100 top-0'
    const bgStyle = 'position-fixed w-100 top-0 bg-white'

  return (
    <div className = {showNav ? bgStyle : defaultStyle } style={{zIndex:'10'}} >
         <Container className="d-flex align-items-center justify-content-between p-2">
          <NavLink className="fs-3 me-5 fw-bold" to="/" style={{color:'#2dd4bf', zIndex:'10'}}>
            TVMAZE
          </NavLink>
       <div className="d-block d-md-none" style={{zIndex:'10'}}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            direction="right"
          />
        </div>
         <div className="d-none d-md-flex flex-grow-1 ">
            <NavLink
              className=" fw-bold "
              to="/"
              style={{color:'#a1a1a1'}}
            >
              Tv Shows
            </NavLink>
         </div>
         <div className="d-none d-md-flex gap-4">
         <NavLink
            className=" fw-bold"
            to="/search"
            style={{color:'#a1a1a1'}}
          >
            Search
          </NavLink>

          <a href="https://www.tvmaze.com" target='_blank' className="text-secondary align-self-center fw-bold" style={{color:'#a1a1a1'}}>
              FIND OUT MORE 
            </a>
         </div>

      </Container>
      {isOpen && <Navlocker isOpen={isOpen} setOpen={setOpen} />}
    </div>
  )
}
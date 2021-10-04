import React from 'react'
import { useRef } from 'react';
import { BsBarChartSteps } from "react-icons/bs";

function Header() {

  const collaps = useRef(null)

  const handleCollaps = (e) => {
    console.log(collaps.current);
    collaps.current.classList.toggle('myShow')
  }

    return (
      <header className='header'>
        <div className="container">
          <nav className="navbar">
              <div className='myLogo-home'>
                <img className="navbar-brand" src="./images/fave3.png" alt="logo"/>
                <span className="mySpan">Dev Design</span> plus
              </div>
              <button onClick={handleCollaps} className="navbarToggler" type="button" >
                <BsBarChartSteps/>
              </button>
              <div ref={collaps} className="navbarNav" id="">
                <ul className="d-flex">
                  <li className="active">Acceuil</li>
                  <li className="">Aprops</li>
                  <li className="">Nos produit</li>
                  <li className=" ms-0">Contact</li>
                </ul>
              </div>
          </nav>
        </div>
      </header>

    )
}

export default Header

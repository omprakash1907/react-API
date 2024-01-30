import React from 'react'
import logo from '../Assets/Image/cropped-logo-1-1.png'
import css from '../Assets/css/main.css'
import {  useNavigate } from 'react-router-dom'


const Header = ({setIsLoggedIn}) => {

  const nevigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedIn(true)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('storedUserLoggedIn');
    window.location.reload()
    window.location.replace('/')
    nevigate('/')
  }

  return (
    <div className='w-100 position-sticky top-0  end-0 ' style={{zIndex:'1'}}>
      <div className='d-flex justify-content-between align-items-center header'>
        <div className=" px-3 header-left d-flex  position-relative " style={{marginLeft:"300px"}}>
          <input type="search" className=' form-control search ' placeholder='Search...' style={{width:"350px"}}/>
          <button className='btn search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="header-right">
          <ul className='d-flex  justify-content-between align-items-center mb-0 '>
            <li className='me-3'><a className='text-white ' href="">My Account</a></li>
            <li className='me-3 '><a className='text-white btn btn-primary  ' onClick={handleLogout} >LogOut</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

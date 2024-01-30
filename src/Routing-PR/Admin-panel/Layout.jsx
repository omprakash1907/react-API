import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../Assets/Image/User-Avatar-PNG-Transparent-Image.png'

const Layout = ({loggedInuser}) => {
  return (
    <div className=' aside position-fixed  h-100  top-0 start-0 ' style={{ width: "300px", zIndex:'2' }}>
      <div className='aside-top d-flex  justify-content-center align-items-center '>
        <h2 className='text-theme'>API Hunter-PR</h2>
      </div>
      <div className="profile py-3 ">
        <div className="user-img m-auto " style={{height:"116px",width:'146px'}}>
          <img src={profile} alt=""  className='img-fluid '/>
        </div>
        <div className="user-info m-auto text-center">
          <h5 className=' fw-bold text-white'>{loggedInuser.name}</h5>
        </div>
      </div>
      <nav className='mt-4'>
        <ul>
          <li>
            <Link to="/"><i class="fa-solid fa-house me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Dashboard</span></Link>
          </li>
          <li>
            <Link to="/product"><i class="fa-solid fa-bag-shopping  me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Product's</span></Link>
          </li>
          <li>
            <Link to="/settings"><i class="fa-solid fa-gear me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Setting</span></Link>
          </li>
          <li>
            <Link to="/cart"><i class="fa-solid fa-cart-arrow-down me-2 py-2 text-theme mb-1"></i><span className='text-theme'>Cart</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Layout

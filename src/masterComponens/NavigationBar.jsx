import BrandImage from '../images/7934918.jpg'

function NavigationBar() {
  return (
<>

<div>

<div className="navbar bg-black shadow-sm text-white">
  <div className="navbar-start  relative">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a> HOME </a></li>
    
    <li><a>SERVICE</a></li>
    <li><a> ABOUT US </a></li>
  
  <li><a>CONTACT US</a></li>
      </ul>
    </div>


    <a className=" bg-black   border-none absolute right-[-100%] lg:left-0 lg:pt-1">
 <div>
    <img src={BrandImage} alt="BrandImage" className='h-14 w-25 rounded-lg' />
 </div>

    </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a> HOME </a></li>
    
      <li><a>SERVICE</a></li>
      <li><a> ABOUT US </a></li>
    
    <li><a>CONTACT US</a></li>
    </ul>
  </div>

</div>




</div>





</>
  )
}

export default NavigationBar
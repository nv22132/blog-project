import React, { useState } from "react";
import images from '../constants/images'

const NavItemsinfo = [
  {name: "Home"},
  {name: "articals"},
  {name: "pages"},
  {name: "priceing"},
  {name: "FAQ"}

] 

const NavItem = ({name}) =>{
  return(
<li className='relative group'><a href="" className='px-4 py-2'>{name}</a> <span className='text-blue-500 absolute transition-all duration-500 font-blod right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span></li>
  )
}
const Header = () => {
const [navIsVisible,setNavIsVisible] = useState(false);

const nasVisibilityHandler = () => {
  setNavIsVisible((curState) => {
    return !curState;
  })
}
  return (
    <section> 
    <header className='container mx-auto px-5 flex justify-between items-center'>
      <div>
<img className='w-16' src={images.logo} alt='logo'/>
      </div>
      <div className={'${navIsVisible ? "right-0" : "-right-full"} flex flex-col w-full lg:w-auto justify-center lg:jusify-end lg:flex-row fixed top-0 bottom-0  lg:static gap-x-9 items-center'}>
<ul className='flex gap-x-2 font-semibold  '>
{NavItemsinfo.map((item) => (
  <NavItem key={item.name} name={item.name} />
))}
</ul>
<button className=' border-2 border-blue-500 px-5 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>sign in</button>
      </div>
    </header>

    </section>
  )
}

export default Header

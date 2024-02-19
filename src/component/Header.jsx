import React from 'react'
import images from '../constants/images'

const Header = () => {
  return (
    <section> 
    <header>
      <div>
<img src={images.logo} alt='logo'/>
      </div>
      <div>
<ul>
  <li><a href="">home</a></li>
  <li><a href="">articals</a></li>
  <li><a href="">pages</a></li>
  <li><a href="">priceing</a></li>
  <li><a href="">FAQ</a></li>
</ul>
<button>sign in</button>
      </div>
    </header>

    </section>
  )
}

export default Header

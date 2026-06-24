import React, { useState } from 'react'
const headerNav = [

  {
    title: "intro",
    url: "/",
  },

  {
    title: "skill",
    url: "/",
  },

  {
    title: "site",
    url: "/",
  },

  {
    title: "port",
    url: "/",
  },

  {
    title: "contact",
    url: "/",
  },

]



const Header = () => {

  const [show, setShow] = useState(false);
  // show : false

  const togglMenu = ()=>{

    setShow((pShow) => !pShow)
    // 들어온 입력값을 0 -> 1, 1 -> 0로 변경해준는 함수


  }

  return (
    <header id='header' role='banner'>
      <section className='header_inner'>
        <h1 className="header_logo">
          <a href="/">portfolio <em>react.js</em></a>
        </h1>
        <nav className={`header_nav ${show ? "show" : ""}`} role='navigation' aria-label='800이상 메뉴'>
          <ul>
            {headerNav.map((nav,key)=>(
               <li key={key}><a href={nav.url}>{nav.title}</a></li>
            ))}
           
         
          </ul>
        </nav>
        <nav
          className="header_nav_m"
          id='headerToggle'
          role='button'
          tabIndex={0}
          onClick={togglMenu}
          // 클릭했을 때 toggleMenu 함수를 실행하라.
          aria-expanded={show ? "true" : "false"}

        >
          <span></span>
        </nav>
      </section>
    </header>
  )
}

export default Header

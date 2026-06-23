import React, { useState } from 'react'

const Header = () => {

  const [show, setShow] = useState(false);
  // useState() : 컴퍼넌트의 상태를 관리해주는 훅
  // 훅 : (=메서드)
  // false : 초기값
  // show(주인) : 상태를 만들고, 초기값 false로 지정
  // setShow(노예) :  이 상태값을 바꾸는 함수(상태를 업그레이드 한 상태)


  //들어온 값의 반대값으로 바꿔주는 함수
  const toggleMenu = ()=>{
    setShow((pShow) => !pShow)
    // ! : 반대값(참->거짓)(거짓->참)
  }

  return (
    <header id='header' role='banner'>
      <section className='header_inner'>
        <h1 className="header_logo">
          <a href="/">portfolio <em>react.jsx</em></a>
        </h1>
        <nav className={`header_nav ${show ? "show" : ""}`} role='navigation' aria-label='800이상 메뉴'>

          <ul>
            <li><a href="/">Intro</a></li>
            <li><a href="/">Skill</a></li>
            <li><a href="/">Site</a></li>
            <li><a href="/">Port</a></li>
            <li><a href="/">Contents</a></li>
          </ul>
        </nav>
        <nav className="header_nav_m" 
        id='headerToggle' 
        role='button' 
        tabIndex={0}
        onClick={toggleMenu}
        >
          <span></span>
        </nav>
      </section>
    </header>
  )
}

export default Header
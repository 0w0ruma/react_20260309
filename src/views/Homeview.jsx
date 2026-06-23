import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Port from '../components/Port'
import Contact from '../components/Contact'


const Homeview = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default Homeview
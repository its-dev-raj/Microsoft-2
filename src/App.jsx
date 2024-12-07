import React, { useState } from 'react'
import Navbar from './pages/Navbar'
import Navbar2 from './pages/Navbar2'
import Hero from './pages/Hero'
import Navbar3 from './pages/Navbar3'
import Heading from './pages/Heading'
import Main from './pages/Main'
import Heading2 from './pages/Heading2'
import Classroom from './pages/Classroom'
import Heading3 from './pages/Heading3'
import Main2 from './pages/Main2'

const App = () => {

  
  return (
    <div className='relative'>
      <Navbar />
      <Navbar2 />
      <Hero />
      <Navbar3 />
      <Heading />
      <Main />
      <Heading2 />
      <Classroom />
      <Heading3 />
      <Main2/>
    </div>
  )
}

export default App
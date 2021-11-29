import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import NotFound from './routes/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './routes/Content'

const App = () => {
   document.title = 'Sebastian Campos'

   const [language, setLanguage] = useState('ES')

   useEffect(() => {
      (localStorage.getItem('language') === 'ES') ? setLanguage('ES') : setLanguage('EN')

      !localStorage.getItem('language') && setLanguage('ES')
   }, [language])

   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='content' element={<Content />} />
            <Route path='projects' element={<Projects />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>

   )
}

export default App


import './App.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import authActions from './redux/actions/authentication'
import othersActions from './redux/actions/others'

import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import NotFound from './routes/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'
import Community from './routes/Community'

const App = () => {
   document.title = 'Sebastian Campos'

   // const user = useSelector(state => state.auth.user)
   const dispatch = useDispatch()
   // && (localStorage.getItem('language') !== 'EN')
   useEffect(() => {
      if (localStorage.getItem('token')) dispatch(authActions.loginUserLS(localStorage.getItem('token')))
      dispatch(othersActions.changeLanguage(((localStorage.getItem('language') === 'EN')) ? 'EN' : 'ES'))
   }, [])


   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='community' element={<Community />} />
            <Route path='projects' element={<Projects />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />´
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>

   )
}

export default App


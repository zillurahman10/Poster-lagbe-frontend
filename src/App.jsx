import { useState } from 'react'
import './App.css'
import Home from './pages/home/home'
import { ComplexNavbar } from './components/navbar/navbar'
import { FooterWithSitemap } from './components/footer/footer'

function App() {

  return (
    <div className='App'>
      <ComplexNavbar></ComplexNavbar>
      <Home/>
      <FooterWithSitemap></FooterWithSitemap>
    </div>
  )
}

export default App

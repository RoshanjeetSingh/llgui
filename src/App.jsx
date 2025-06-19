import './App.css'
import WebHeader from './header/header.jsx'
import { Outlet } from 'react-router-dom'
import Content from './ContentSection/content.jsx'
import FooterBanner from './footer/footerbanner.jsx'


function App() {
  
  return (
   <div>
    <WebHeader />
    <Outlet />
    <Content/>
    
    <FooterBanner/>
   </div>
  )
}

export default App

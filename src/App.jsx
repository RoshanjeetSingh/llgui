import './App.css'
import WebHeader from './header/header.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
   <div>
    <WebHeader />
    <Outlet />
   </div>
  )
}

export default App

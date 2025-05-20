import React,{ useState } from 'react'
import './App.css'
import WebHeader from './header/header.jsx/'
import MainContent from './maincontent/mainarea.jsx'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar/sidebar.jsx'
import  AboutPeople  from "./sidebar/aboutpeople";
import History from './sidebar/history';
import Sports from './sidebar/sports.jsx'

function App() {
  
  return (
   <div>
    <WebHeader />
    <MainContent />
    <div id='sidebar' style={{display:`flex`,

    }}>
    <Sidebar/>
    <div style={{ marginLeft: '20px', flex: 1 }}>
          <Routes>
            <Route path="/aboutpeople" element={<AboutPeople />} />
            <Route path="/history" element={<History />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/" element={<div>Welcome! Select a section from the sidebar.</div>} />
          </Routes>
        </div>
    </div>
   </div>
  )
}

export default App

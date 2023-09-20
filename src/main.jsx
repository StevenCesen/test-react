import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './pages/Page404.jsx'
import './index.css'
import CardSpell from './components/CardSpell/CardSpell.jsx'
import Characters from './pages/Characters.jsx'
import CardCharacter from './components/CardCharacter/CardCharacter.jsx'
import Spells from './pages/Spells.jsx'
import Character from './pages/Character.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}></Route>
        </Route>
        
        <Route path='/spells' element={<App/>}>
          <Route index element={<Spells/>}></Route>
          <Route path=':id' element={<CardSpell/>}></Route>
        </Route>

        <Route path='/character' element={<App/>}>
          <Route index element={<Characters/>}></Route>
          <Route path=':id' element={<Character/>}></Route>
        </Route>

        <Route path='*' element={<Page404/>}></Route>

      </Routes>
    </BrowserRouter>
  </>
)

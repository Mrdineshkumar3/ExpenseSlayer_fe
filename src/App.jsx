

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Security from './component/Security'
import Home from './component/Home'
import Content from './component/Content'

function App() {


  return (
    <div className=''>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Security/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/content' element={<Content />}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Campaigns from './pages/Campaigns'

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path = 'contact' element ={<ContactPage />} />
          <Route path = 'campaigns' element ={<Campaigns />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

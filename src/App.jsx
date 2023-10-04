import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NuevaCategoria from './pages/NuevaCategoria';
import NuevoVideo from './pages/NuevoVideo';
import Page404 from './pages/Page404';
import Footer from './components/Footer/Footer';
import './App.css'
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
       <Router>
          <Header/>
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/nuevovideo' element={ <NuevoVideo /> }/>
              <Route path='/nuevacategoria' element={ <NuevaCategoria /> }/>
              <Route path='*' element={ <Page404/> } />
            </Routes>
        </Router>
        <Footer/>
     
    </div>
  )
}

export default App

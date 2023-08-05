import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {Container} from './components/index';
import {Header, Footer} from './sections/index';

import { Home, Browse, Details, Streams, Profile } from './Pages';

const App = () => {
    return(
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Browse' element={<Browse/>}></Route>
            <Route path='/Details' element={<Details/>}></Route>
            <Route path='/Streams' element={<Streams/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    )
  }


export default App
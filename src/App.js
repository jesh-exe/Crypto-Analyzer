import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Singlecoin from './components/Singlecoin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className='container-fluid '>

    <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/coin/:id" element={<Singlecoin/>}></Route>
       </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

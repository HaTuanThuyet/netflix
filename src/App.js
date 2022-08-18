import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Menus from './components/Menus/Menus';
import Contens from './components/contents/Contens';
import MovieDetail from './components/movieDetail/movieDetail';
import { useSelector } from 'react-redux';
import SearchMovies from './components/SearchMovie/SearchMovies';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/search" element={<Search/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
        
        )
      }
              
     



export default App;




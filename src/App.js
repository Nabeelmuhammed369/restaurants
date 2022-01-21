
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import RestaurantDetails from './components/RestaurantDetails';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom'
import Restaurants from './components/Restaurants';
function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <RestaurantDetails/>
    <main className="py-3">
    <Container>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
      </Routes>
    </Container>
    </main>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;

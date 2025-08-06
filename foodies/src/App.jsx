import Menubar from './components/Menubar/Menubar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ExploreFood from './pages/ExploreFood/ExploreFood';
import Cart from '../../foodies1/food/src/pages/Cart/Cart';


const App = () => {
  return (
    <div>
       <Menubar/>
       <Routes>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/explore' element= {<ExploreFood/>}/>
        <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default App;
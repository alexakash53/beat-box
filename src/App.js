import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Review from './component/Review/Review';
import Blog from './component/Blog/Blog';
import Dashboard from './component/Dashboard/Dashboard';
import About from './component/About/About';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Review' element={<Review></Review>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

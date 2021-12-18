
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/HomeContainer';
import ShopDetail from './component/ShopDetail/ShopDetail';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop/:id" element={<ShopDetail />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

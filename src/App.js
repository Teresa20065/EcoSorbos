import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import Cart from './components/Cart';
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import SPFooter from './components/SPFooter';
import Under20 from './components/Under20';
import Under10 from './components/Under10';
import ForHer from './components/ForHer';
import MobileNav from './components/MobileNav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes >
          <Route path='/' exact element={<>   <NavBar /> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}  {/*<OurBestSellers />*/}  <FollowONIG /> <SPFooter />  </>} />
          <Route path='/:id' exact element={<> <NavBar /> <MobileNav />  <SinglePage /> </>} />
          <Route path='/journal/april' element={<> <NavBar /> <MobileNav />  <JournalPage /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /> <CartHold /></>} />
          <Route path='/under20' element={<> <NavBar />  <Under20 /> </>} />
          <Route path='/under40' element={<> <NavBar />  <Under10 /> </>} />
          <Route path='/forher' element={<> <NavBar />  <ForHer /> </>} />
        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;

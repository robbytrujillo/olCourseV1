import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
// import FooterComponent from './components/FooterComponent';

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import FaqPage from "./pages/FaqPage";


function App() {
  return <div>
    <NavbarComponent /> 
    
    <Routes>
      <Route path = "/" Component={HomePage} />
      <Route path = "/kelas" Component={KelasPage} />
      <Route path = "/testimonial" Component={TestimonialPage} />
      <Route path = "/syaratketentuan" Component={SyaratKetentuanPage} />
      <Route path = "/faq" Component={FaqPage} />
    </Routes>

    {/* <FooterComponent /> */}
  </div>
}

export default App

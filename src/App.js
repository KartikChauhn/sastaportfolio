import Aboutus from "./pages/Aboutus";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Contactus from "./pages/Contactus";
import OurWork from "./pages/OurWork";
import { Route, Routes,useLocation } from "react-router-dom";
import Moviedetail from "./pages/Moviedetails";


//animation imports
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div> 
      <GlobalStyles/>
      <Nav/>
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.pathname} >
            <Route path='/' element={<Aboutus/>} />
            <Route path='/work' element={<OurWork/>} />
            <Route path='/work/:id' element={<Moviedetail/>} />
            <Route path='/contact' element={<Contactus/>} />
        </Routes>
      </AnimatePresence>
      
    </div>
  ); 
}

export default App;

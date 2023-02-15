import Aboutus from "./pages/Aboutus";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Contactus from "./pages/Contactus";
import OurWork from "./pages/OurWork";
import { Route, Routes } from "react-router-dom";
import Moviedetail from "./pages/Moviedetails";


function App() {
  return (
    <div> 
      <GlobalStyles/>
      <Nav/>
      <Routes>
          <Route path='/' element={<Aboutus/>} />
          <Route path='/work' element={<OurWork/>} />
          <Route path='/work/:id' element={<Moviedetail/>} />
          <Route path='/contact' element={<Contactus/>} />
      </Routes>
      
    </div>
  ); 
}

export default App;

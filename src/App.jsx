import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Index} from "./components/Home/Index";
import { AboutUs } from './components/AboutUs/AboutUs';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Collections } from './components/Collections/Collection';
import { Catalogue } from './components/Catalogue/Catalogue';

function App() {
  return (
    
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/catalogue" element={<Catalogue />} />

          <Route exact path="/collection" element={<Collections />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;





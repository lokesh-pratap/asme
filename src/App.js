import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home category="topstories" heading="Top Stories" />} />
        <Route path="/sports" element={<Home category="%2F4719148" heading="Sports" />} />
        <Route path="/science" element={<Home category="%2F-2128672765" heading="Science" />} />
        <Route path="/environment" element={<Home category="%2F2647163" heading="Environment" />} />
        <Route path="/technology" element={<Home category="%2F66949542" heading="Technology" />} />
        <Route path="/entertainment" element={<Home category="%2F1081479906" heading="Entertainment" />} />
      </Routes>
      
    </div>
  );
}

export default App;

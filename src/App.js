import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homeview from "./views/Homeview";
import Sub1 from "./views/Sub1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Homeview />} />
        <Route path="/sub1" element = {<Sub1 />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

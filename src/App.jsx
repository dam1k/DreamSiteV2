import "./App.scss";
import {gsap} from "gsap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
    let animation = gsap.timeline();

  return (
    <BrowserRouter>
    <div className="App">
      <div className="wrapper">
        <Header animation={animation}/>
       <Routes>
        <Route path="/" element={<Home animation={animation}/>}/>
       </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

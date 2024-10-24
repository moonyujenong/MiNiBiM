import "./App.css";
import { lazy } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

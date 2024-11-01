import "./App.css";
import { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));

function App() {
  return (
    <BrowserRouter basename="/MiNiBiM">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

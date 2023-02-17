//1. import area
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import { ComponentB } from './pages/ComponentB';
import ComponentA from './pages/ComponentA';
import ComponentC from './pages/ComponentC';
import ComponentD from './pages/ComponentD';
import { ComponentE } from './pages/ComponentE';
import ComponentF from './pages/ComponentF';
import { ComponentG } from './pages/ComponentG';
import ComponentH from './pages/ComponentH';
import { ComponentI } from './pages/ComponentI';
import ComponentJ from './pages/ComponentJ';
import { ComponentK } from './pages/ComponentK';
import ComponentL from './pages/ComponentL';
import { ComponentM } from './pages/ComponentM';
import { ComponentN } from './pages/ComponentN';
import ComponentO from './pages/ComponentO';
import { ComponentP } from './pages/ComponentP';
import ComponentQ from './pages/ComponentQ';
import { ComponentR } from './pages/ComponentR';
import ComponentS from './pages/ComponentS';
import { ComponentT } from './pages/ComponentT';
import { ComponentU } from './pages/ComponentU';
import ComponentV from './pages/ComponentV';
import ComponentW from './pages/ComponentW';
import { ComponentX } from './pages/ComponentX';
import ComponentY from './pages/ComponentY';
import { ComponentZ } from './pages/ComponentZ';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ComponentB />
        <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="/a" element={<ComponentA />} />
            <Route path="/b" element={<ComponentB />} />
            <Route path="/c" element={<ComponentC />} />
            <Route path="/d" element={<ComponentD />} />
            <Route path="/e" element={<ComponentE />} />
            <Route path="/f" element={<ComponentF />} />
            <Route path="/g" element={<ComponentG />} />
            <Route path="/h" element={<ComponentH />} />
            <Route path="/i" element={<ComponentI />} />
            <Route path="/j" element={<ComponentJ />} />
            <Route path="/k" element={<ComponentK />} />
            <Route path="/l" element={<ComponentL />} />
            <Route path="/m" element={<ComponentM />} />
            <Route path="/n" element={<ComponentN />} />
            <Route path="/o" element={<ComponentO />} />
            <Route path="/p" element={<ComponentP />} />
            <Route path="/q" element={<ComponentQ />} />
            <Route path="/r" element={<ComponentR />} />
            <Route path="/s" element={<ComponentS />} />
            <Route path="/t" element={<ComponentT />} />
            <Route path="/u" element={<ComponentU />} />
            <Route path="/v" element={<ComponentV />} />
            <Route path="/w" element={<ComponentW />} />
            <Route path="/x" element={<ComponentX />} />
            <Route path="/y" element={<ComponentY />} />
            <Route path="/z" element={<ComponentZ />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

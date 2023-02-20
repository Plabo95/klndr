import {Routes,Route,} from "react-router-dom";
import { useState, useEffect } from "react";

//pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Logged/Dashboard";
import MyGarage from "./pages/Logged/MyGarage";
import Orders from "./pages/Logged/Orders";

export default function App() {
  
const [device, setDevice] = useState(getWindowSize());

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  if(innerWidth<1024){
    return 'm'
  };
  if(innerWidth>1023){
    return 'd'
  };
}
useEffect(() => {
  function handleWindowResize() {
    setDevice(getWindowSize());
  }
  window.addEventListener('resize', handleWindowResize);
  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
})

  return (
    <Routes>
        <Route index path='/' element={<Landing  device={device} />} />
        <Route index path='/login' element={<Login  device={device} />} />
        <Route index path='/register' element={<Register  device={device} />} />

        <Route index path='/dashboard' element={<Dashboard  device={device} />} />
        <Route index path='/ordenes' element={<Orders  device={device} />} />
        <Route index path='/taller' element={<MyGarage  device={device} />} />


    </Routes>
  )
}


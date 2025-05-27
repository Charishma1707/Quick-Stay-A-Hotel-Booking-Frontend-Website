import React from 'react'
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

const App = () => {
  const isOwner=useLocation().pathname.includes("owner");
  return (
    <div>  
    {!isOwner&&<Navbar/>}
    <div className='min-h-[70vh]'>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/rooms' element={<AllRooms/>}></Route>
      <Route path='/rooms/:id' element={<RoomDetails/>}></Route>
      <Route path='my-bookings' element={<MyBookings/>}></Route>
     </Routes>
    </div>
   <Footer></Footer>
    </div>
  )
}

export default App

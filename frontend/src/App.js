import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Chudi from './Components/Chudi/Chudi';
import Home from './Components/Home/Home';
import Embrodery from './Components/Embrodery/Embrodery';
import Contact from './Components/Contact/Contact';
import Nighty from './Components/Nighty/Nighty';
import Saree from './Components/Saree/Saree';
import Service from './Components/Service/Service';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import View from './Components/View/View';
import Front from './Components/Front/Front';
import Combine from './Components/Combine/Combine';
import Admin from './Components/Admin/Admin';
import Login1 from './Components/Login1/Login1';
import Register1 from './Components/Register1/Register1';
import Saree1 from './Components/Saree1/Saree1';
import Chudi1 from './Components/Chudi1/Chudi1';
import Embrodery1 from './Components/Embrodery1/Embrodery1';
import Nighty1 from './Components/Nighty1/Nighty1';
import View1 from './Components/View1/View1';
import View2 from './Components/View2/View2';
import View3 from './Components/View3/View3';
import Views1 from './Components/Views1/Views1';
import Views from './Components/Views/Views';
import Views2 from './Components/Views2/Views2';
import Views3 from './Components/Views3/Views3';
import Order from './Components/Order/Order';
import Front1 from './Components/Front1/Front1';
import Order1 from './Components/Order1/Order1';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/login', '/register','/login1', '/register1','/front1','/order1','/saree','/chudi','/embrodery','/nighty','/view','/view1','/view2','/view3']; // Hide navbar only on Front page
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login1" element={<Login1/>}/>
        <Route path='/front1' element={<Front1/>}/>
        <Route path='register1' element={<Register1/>}/>
        <Route path="/chudi" element={<Chudi />} />
        <Route path='/chudi1' element={<Chudi1/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/embrodery" element={<Embrodery />} />
        <Route path='/embrodery1' element={<Embrodery1/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/nighty" element={<Nighty />} />
        <Route path='/nighty1' element={<Nighty1/>}/>
        <Route path="/saree" element={<Saree />} />
        <Route path='/saree1' element={<Saree1/>}/>
        <Route path="/service" element={<Service />} />
        <Route path="/view" element={<View />} />
        <Route path='/view1' element={<View1/>}/>
        <Route path='/view2' element={<View2/>}/>
        <Route path='/view3' element={<View3/>}/>
        <Route path='/views' element={<Views/>}/>
        <Route path="/views1" element={<Views1/>}/>
        <Route path='/views2' element={<Views2/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/order1' element={<Order1/>}/>
        <Route path='/views3' element={<Views3/>}/>
        <Route path="/combine" element={<Combine />} /> {/* ✅ Added Combine Route */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
};

export default App;

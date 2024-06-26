import React from 'react';
import {Navbar} from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ViewItems from './components/ViewItems/ViewItems';
import Order from './components/OrderPackage/Order';
import RegisterUser from './components/RegisterUser/RegisterUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      {/* <Route exact path="/user" element={<UserList/>} /> */}
      <Route path='/home' element={<ViewItems />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path='/order' element={<Order />} />
      <Route exact path='/register' element={<RegisterUser />} />
        <Route exact path='/' element={<RegisterUser />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

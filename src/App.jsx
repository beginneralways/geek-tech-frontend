import React from 'react';

// import { Footer } from './components/Footer/Footer';

import {Navbar} from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';

import ViewItems from './components/ViewItems/ViewItems';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      {/* <Route exact path="/user" element={<UserList/>} /> */}
      <Route path='/home' element={<ViewItems />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path='/list' element={<ProductList />} />
      {/* <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/form1' element ={<FormOne />} />
      <Route exact path='/form2' element={<FormTwo />} />
      <Route exact path='/form3' element={<FormThree />} />
      <Route exact path='/form4' element={<FormFour />} />
       */}
      </Routes>
      {/* <Footer/> */}
    
     
     </BrowserRouter>
    </div>
  );
}

export default App;

 import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import React from 'react'
 import Login from './Login' 
import Podaci from './Podaci'
import Register from './Register'
import Pocetne from './Pocetne'
import SinglePage from './SinglePage'
import PocetnaLayout from './PocetnaLayout'
import Korisnik from './Korisnik'



function App() {
  return (
    <BrowserRouter>
      <>
        {/* You can place common components or layout here */}
        
        {/* Define your routes */}
        <Routes>
          {/* Route for the Register component */}

          <Route path="/" element={<PocetnaLayout />} >
          <Route path="/register" element={<Register />} />

          {/* Add more routes for other components */}
           <Route path="/login" element={<Login />} />
              <Route path="/pocetne" element={<Pocetne />} />
              <Route path="/podaci" element={<Podaci />} />
              <Route path="/singlepage" element={<SinglePage />} /> 
              <Route path="/korisnik" element={<Korisnik />} /> 
          
          </Route>
          {/* If none of the above routes match, redirect to a default route or show a 404 page */}
          {/* <Route component={NotFoundPage} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;



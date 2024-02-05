

import React, { useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import Korisnik from './Korisnik';
import "./App.css"

const Login = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: ''
    /*  sifra: '', // Add password field for login */
  });

  const [showDataAll, setShowDataAll] = useState(true);
  const [provjeraRezultat, setProvjeraRezultat] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthentication = async (e) => {
    e.preventDefault();

    try {
      // Adjust the API endpoint for login
      const response = await axios.get('https://apipravi.onrender.com/provjeri', formData);


      /*  setProvjeraRezultat(response.data); */
      setProvjeraRezultat(response.config.ime);
      setShowDataAll(false);
      console.log(response.config.ime)
    } catch (error) {
      console.error('Greška prilikom autentikacije:', error);
    }
  };

  return (
    <>
      <div className={` ${showDataAll ? 'show' : 'hide'}`}>
        <div className='bgPocetne w-[100vw] h-[100vh] flex justify-center items-center'>
          <div className='lg:w-[40%] sm:w-[60%] w-[80%] lg:h-[50%] sm:h-[60%] h-[70%] pt-10 pb-10 bg-slate-900 bg-opacity-70 text-slate-200 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold mb-5'>Sign In</h1>
            <form className='text-lg' onSubmit={handleAuthentication}>
              <label className='flex flex-row justify-between'>
                Name:
                <input
                  className='sm:m-1 m-3  w-[70%] text-black'
                  type='text'
                  name='ime'
                  value={formData.ime}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='flex flex-row justify-between'>
                Last name:
                <input
                  className='sm:m-1 m-3  w-[70%] text-black'
                  type='text'
                  name='prezime'
                  value={formData.prezime}
                  onChange={handleChange}
                />
              </label>
              <br />

              <div className='flex justify-center'>
                <button
                  className='bg-orange-400 bg-opacity-70 p-3 font-bold hover:bg-orange-500 tracking-[.10em]'
                  type='submit'
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={` ${showDataAll ? 'hide' : 'show'}`}>
        {provjeraRezultat && provjeraRezultat.kreirajJedan && (
          <div>
            {/* 
            <Korisnik ime={provjeraRezultat.kreirajJedan.ime} /> */}
          </div>
        )}
        {/*   <h1>gggggggggggggggggggggggggg</h1>
        <p>{provjeraRezultat} </p> */}
        <Korisnik ime={provjeraRezultat} />
      </div>
    </>
  );
};

export default Login;



// Import necessary dependencies
import React, { useState } from 'react';
import "./App.css"
import axios from 'axios';
import Welcome from './Welcome';  // Update the path based on your project structure
import Korisnik from './Korisnik';

// Rest of the Register component code...

const Register = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    sifra: ''
  });

  const [showDataAll, setShowDataAll] = useState(true);

  const [provjeraRezultat, setProvjeraRezultat] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Slanje podataka na server pomoću Axios-a za kreiranje korisnika
      const response = await axios.post('https://apipravi.onrender.com/kreiraj', formData);

      // Obrada odgovora od servera (ako je potrebno)
      console.log('Odgovor od servera za kreiranje:', response.data);

      // Resetovanje forme nakon uspešne registracije
      setFormData({
        ime: '',
        prezime: '',
        sifra: ''
      });

      // Update the state with response data
      setProvjeraRezultat(response.data);

    } catch (error) {
      // Obrada greške (ako je potrebno)
      console.error('Greška prilikom registracije:', error);
    }
  };



  return (
    <>
      <div>
        <div className={` ${showDataAll ? 'show' : 'hide'}`} >



          <div className='bgPocetne w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className=' w-[40%] h-[50%] pt-10 pb-10 bg-slate-900 bg-opacity-70 text-slate-200 flex flex-col justify-center items-center'>
              {/* Rest of the Register component code... */}
              {/*  <Korisnik ime={formData.ime} /> */}
              <h1 className=' text-3xl font-bold mb-5 ' >Sign Up</h1>
              <form className='text-lg  ' onSubmit={handleSubmit}>
                <label className=' flex flex-row justify-between' >
                  Name:
                  <input className='m-1 text-black' type="text" name="ime" value={formData.ime} onChange={handleChange} />
                </label>
                <br />
                <label className=' flex flex-row justify-between '>
                  Last name:
                  <input className='m-1 text-black' type="text" name="prezime" value={formData.prezime} onChange={handleChange} />
                </label>
                <br />
                <label className=' flex flex-row  justify-between '>
                  Password:
                  <input className='m-1 text-black' type="password" name="sifra" value={formData.sifra} onChange={handleChange} />
                </label  >
                <br />
                <div className=' flex justify-center ' >
                  <button onClick={() => setShowDataAll(false)} className=' bg-orange-400 bg-opacity-70 p-3 font-bold hover:bg-orange-500 tracking-[.10em]  ' type="submit">Registration</button>
                </div>
              </form>

            </div>
            <br />
            {/* {provjeraRezultat && provjeraRezultat.korisnik && (
        <Welcome registeredName={provjeraRezultat.korisnik.ime} />
      )} */}
            {/*       {provjeraRezultat && provjeraRezultat.korisnik && (
  <Welcome  registeredName={provjeraRezultat.korisnik.ime} />
  
)} */}

          </div>
        </div>
      </div>

      <div className={` ${showDataAll ? 'hide' : 'show'}`} >

        {provjeraRezultat && provjeraRezultat.kreirajJedan && (
          // Render the specific values you need
          <div> {/* {provjeraRezultat.kreirajJedan.ime} */}
            <Korisnik ime={provjeraRezultat.kreirajJedan.ime} />

          </div>

        )}
      </div>

    </>
  );
};

export default Register;

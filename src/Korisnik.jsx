/* import React from 'react'

export default function Korisnik(podaci) {
  return (
    <>
     
      <div className={`bgPocetne `}>
        <div className='bgPocetne w-[100vw] h-[100vh] flex justify-center items-center '>
          <div className='w-[100vw] h-[100vh] bg-slate-900 bg-opacity-70 text-slate-200 flex flex-col justify-center items-center '>
            <h1 className='text-3xl font-bold mb-5 '>Dobro dosao {podaci.ime}  </h1>
          </div>
        </div>
      </div>
    </>
  )
}


 */

/* import React, { useState } from 'react';

export default function Korisnik(podaci) {
  const [brojac, setBrojac] = useState(0);

  const povecajBrojac = () => {
    setBrojac(brojac + 1);
  };

  return (
    <>
      <div className={`bgPocetne `}>
        <div className='bgPocetne w-[100vw] h-[100vh] flex justify-center items-center '>
          <div className='w-[100vw] h-[100vh] bg-slate-900 bg-opacity-70 text-slate-200 flex flex-col justify-center items-center '>
            <h1 className='text-3xl font-bold mb-5'>Dobro dosao {podaci.ime}</h1>
            <p>Brojac: {brojac}</p>
            <button onClick={povecajBrojac} className='bg-blue-500 text-white px-4 py-2 mt-3'>
              Povecaj brojac
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
 */

import React from 'react';

export default function Korisnik(podaci) {
  return (
    <>
      <div className={`bgPocetne`}>
        <div className='bgPocetne w-[100vw] h-[100vh] flex justify-center items-center '>
          <div className='w-[100vw] h-[100vh] bg-slate-900 bg-opacity-90 text-slate-200 flex flex-col justify-center items-center rounded-md shadow-lg p-8'>
            <h1 className='text-3xl font-bold mb-5'>
              Welcome, {podaci.ime}!
            </h1>

            <div className='flex items-center mb-5'>
              <img
                src='https://jakovz.weebly.com/uploads/1/9/8/9/19890991/2977887_orig.jpg'
                alt='Slika 1'
                className='w-28 h-28 mr-3 rounded-full'
              />
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJhxosVewpAy1-ZKgipEapX_AEYtChJwQQKuW30qZx_fhljtl2T4BNF06LQtHl8lZIcQ&usqp=CAU'
                alt='Slika 2'
                className='w-28 h-28 rounded-full'
              />
            </div>

            <h2 className='text-xl text-center'>
              Thank you for joining our community. Enjoy the experience and follow the latest information!
            </h2>

            {/* Dodajte ikone i animacije */}
            <div className='flex mt-8 space-x-4'>
              <div className='bg-blue-500 text-white p-4 rounded-full'>
                <i className='fas fa-thumbs-up'></i> Like
              </div>
              <div className='bg-green-500 text-white p-4 rounded-full'>
                <i className='fas fa-comment'></i> Comment
              </div>
              <div className='bg-purple-500 text-white p-4 rounded-full'>
                <i className='fas fa-share'></i> Share
              </div>
            </div>

            {/* Dodajte dodatne elemente prema potrebi */}
          </div>
        </div>
      </div>
    </>
  );
}

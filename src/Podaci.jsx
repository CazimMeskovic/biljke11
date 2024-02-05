/* import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Podaci() {
const [data, setData]=useState([])

useEffect(() => {
    // Ovdje možete staviti kod koji želite izvršiti

    // Na primjer, dohvaćanje podataka sa servera
    const podaci= axios.get('https://apipravi.onrender.com/vans')
console.log(podaci)
   
  }, []);
 
 
  return (
    <div>Podaci


    
    </div>
  )
}
 */

/*  import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Podaci() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dohvaćanje podataka sa servera
        const response = await axios.get('https://apipravi.onrender.com/vans');
        
        // Provjerite da li su podaci ispravno dohvaćeni
        if (response && response.data && response.data.length > 0) {
          setData(response.data);
          // Obrada podataka      
        }
      } catch (error) {
        // Obrada greške ako dođe do problema prilikom dohvaćanja podataka
        console.error('Greška prilikom dohvaćanja podataka:', error);
      }
    };

    // Pozivanje funkcije za dohvaćanje podataka
    fetchData();
  }, []);

  


  return (
    <div className='grid grid-cols-2 gap-4 ' >
{
data.map((dat)=>{
   
    return(
        <div className=' w-[80%] mt-10 ml-10 ' > 
     
        <img className='' src={dat.imageUrl} />
       
       
       
        <h2 className='bg-red-200 w-[20%] p-3 mt-5 text-center text-xl  '  > {dat.name} </h2>
        <h3 className='text-lg mt-5 mb-3 text-inherit   ' > Price {dat.price} $ </h3>
        <p className=' text-orange-700 ' > {dat.description} </p>
      
        

        </div>
    )
})

}


    </div>
  );
}
 */

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Podaci() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Postavite stanje učitavanja na true dok se podaci učitavaju
        setLoading(true);

        // Dohvaćanje podataka sa servera
        const response = await axios.get('https://apipravi.onrender.com/vans');
        
        // Provjerite da li su podaci ispravno dohvaćeni
        if (response && response.data && response.data.length > 0) {
          setData(response.data);
          // Obrada podataka      
        }
      } catch (error) {
        // Obrada greške ako dođe do problema prilikom dohvaćanja podataka
        console.error('Greška prilikom dohvaćanja podataka:', error);
      } finally {
        // Postavite stanje učitavanja na false kada se podaci dohvate (neovisno o uspjehu ili grešci)
        setLoading(false);
      }
    };

    // Pozivanje funkcije za dohvaćanje podataka
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        // Prikazivanje loadera dok se podaci učitavaju
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        // Prikazivanje stvarnih podataka kada su učitani
        <div className='grid grid-cols-2 gap-4 '>
          {data.map((dat, index) => (
            <div key={index} className='w-[80%] mt-10 ml-10'>
              <img className='' src={dat.imageUrl} />
              <h2 className='bg-red-200 w-[20%] p-3 mt-5 text-center text-xl'> {dat.name} </h2>
              <h3 className='text-lg mt-5 mb-3 text-inherit'> Price {dat.price} $ </h3>
              <p className='text-orange-700'> {dat.description} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importovanje CSS-a

export default function Podaci() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get('https://apipravi.onrender.com/vans');

        if (response && response.data && response.data.length > 0) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Greška prilikom dohvaćanja podataka:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-4'>
          {data.map((dat, index) => (
            <div key={index} className='w-[80%] mt-10 ml-10'>
              <img className='' src={dat.imageUrl} />
              <h2 className='bg-red-200 w-[20%] p-3 mt-5 text-center text-xl'> {dat.name} </h2>
              <h3 className='text-lg mt-5 mb-3 text-inherit'> Price {dat.price} $ </h3>
             {/*  <p className='text-orange-700'> {dat.description} </p> */}
             <h2>fffff hhh ddd kkkk bbbbbbbbbb nn hhh</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

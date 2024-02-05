

import React from "react"
import { Outlet, Link, NavLink } from "react-router-dom"
import Header from "./Header"
/* import Footer from "./Footer" */

import Podaci from './Podaci'
import "./App.css"
import Footer from './Footer'


export default function PocetnaLayout() {
    return (
        <>
 {/* <>
<div className='w-[100%] h-[100vh] bg-slate-200 bgPocetne flex justify-center items-center ' >

<div className='bg-orange-200 bg-opacity-70 w-[50%] h-[40%] flex flex-col justify-center  p-10 ' >

    <h1 className='text-5xl text-center ' >Welcome to the page of medicinal plants of Bosnia and Herzegovina</h1>
    <Link className=' w-[70%] h-[15%] bg-orange-500 hover:bg-orange-600 mt-16 text-center pt-2 pb-2 text-lg font-bold ml-auto mr-auto '
     to="/singlepage">
<button  > Find your medicinal plant</button>
  </Link>
</div>
    </div>
     <Footer /> 
    </> */}
     <> 
            <Header />
            <main>
                <Outlet />
            </main>
      
        
        </>
        </>
    )
} 



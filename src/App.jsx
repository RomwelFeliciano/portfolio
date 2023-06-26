import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function App() {

  return (
    <>
    <main className='bg-sky-200 px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='
          text-2xl font-bold'>Ryoma</h1>
          <ul>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
            <li><a href="#" className='bg-teal-500 py-2 px-4 rounded-lg'>Resume</a></li>
          </ul>
        </nav>
      </section>
    </main>
        
    </>
  )
}

export default App

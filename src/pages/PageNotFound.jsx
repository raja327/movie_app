import React from 'react'
import pageNotFound from '../assets/err404.jpg'
import {Button} from '../components/Button'
import { Link } from 'react-router-dom'
export const PageNotFound = () => {
  return (
    <main>
     <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className='text-6xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops !</p>
        <div className="max-w-lg">
        <img className='rounded' src={pageNotFound} alt="" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
            <Button>Back to RpiT</Button>
          </Link>
      </div>
     </section>
    </main>
  )
}


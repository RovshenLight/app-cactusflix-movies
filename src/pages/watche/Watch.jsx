import './watch.css'
import React from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Watch = () => {
  return (
    <div className='watch'>
      <div className="backtohome">
        <Link to="/">
          <BsArrowReturnLeft className='watch__icon' />
        </Link>
          Home    
      </div>
      <video src='https://www.youtube.com/watch?v=hXzcyx9V0xw' autoPlay controls progress/>
    </div>
  )
}

export default Watch
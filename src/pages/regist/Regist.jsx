import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CTA from '../../componets/CTA/CTA'
import './regist.css'
import React, { useState } from 'react'
const Regist = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='regist'>
      <div className="regist__wrapper" >
        <div className="regist__top">
          <div className="regist__logo">
            <h6>CactusFlix</h6>
          </div>
          <Link to='/Login'>
            <CTA a='Si' b='gn' c=' In'/>
          </Link>
        </div>
        <div className="regist__container">
          <h1>Unlimidet movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>Ready to watch? Enter your email to creat or restart your membership.</p>
          <form className='input'>
            <label>Sign Up</label>
              <input type="email" value={email} required placeholder='email address' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='password'value={password} required onChange={(e) => setPassword(e.target.value)} />
              <button className='regist__button'>
               <Link to='/Login'><CTA a='St' b='a' c='rt'/></Link>
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Regist;
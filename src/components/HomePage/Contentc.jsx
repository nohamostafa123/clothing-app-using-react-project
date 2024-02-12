import React from 'react'
import './Content.css';
export default function Contentc() {
  return (
    <div className='hero-container'>
    <label for="Name">Name *</label>
    <input type="text" name='Name'required></input><br></br><br></br>
    <label for="Email">Email *</label>
    <input type="Email" name='Email'required></input><br></br><br></br>
    <label for="Password">Password *</label>
    <input type="Password" name='Password'required></input><br></br><br></br>
    <label for="Password">Phone *</label>
    <input type="phone" name='Phone'required></input><br></br><br></br>
    <button >Submet</button>
    <button >Clear</button>
    </div>
  )
}

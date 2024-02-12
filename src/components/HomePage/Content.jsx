import React from 'react'
import './Content.css';
export default function Content() {
  return (
    <div className='bg-light p-5'>
      <h1 > About Our Product</h1>
      <p>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard. Laptops typically have a clam shell form factor with the screen mounted on the inside of the upper lid and the keyboard on the inside of the lower lid</p>
      <p> although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a "laptop mode".[1][2] Laptops are folded shut for transportation, and thus are suitable for mobile use.[3] They are so named because they can be practically placed on a person's lap when being used. Today, laptops are used in a variety of settings, such as at work, in education, for playing games, web browsing, for personal multimedia, and for general home computer use.</p>
      <button >Read More</button>


      <section className='numbers p-20'>
      <div className='container'>
      <div className='row'>
      <div className='col-md-3'>
      <h2> 1287+</h2>
      <h6>SAVINGS</h6>
      </div>

      
      <div className='col-md-3 '>
      <h2> 7653+</h2>
      <h6>PHOTOS</h6>
      </div>


      <div className='col-md-3'>
      <h2> 4679+</h2>
      <h6>REACTS</h6>
      </div>


      <div className='col-md-3'>
      <h2> 4368+</h2>
      <h6>GOLDS</h6>
      </div>


      </div>
      </div>
      </section>
      <br></br>
      <header>
      <div className='container'>
      <div className='col-md-6'>
      
      <h3>About Our Product</h3>
      <p>Your payment method will automatically be charged in advance every 4 weeks. You will be charged the introductory rate for the introductory period, and thereafter will be charged the standard rate. All subscriptions renew automatically. You can cancel anytime. Mobile apps are not supported on all devices.
      Your payment method will automatically be charged in advance every 4 weeks. You will be charged the introductory rate for the introductory period, and thereafter will be charged the standard rate. All subscriptions renew automatically. You can cancel anytime. Mobile apps are not supported on all devices.</p>
      <button className="btn1">Read more</button>
      <button className="btn2">Order now</button>
      </div>
      <div className='col-md-6'></div>
      </div>
      </header>
    </div>
    
  )
}

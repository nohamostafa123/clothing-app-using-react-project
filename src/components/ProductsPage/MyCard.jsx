import React, { useContext } from 'react'
import {Card} from 'react-bootstrap'
import'./MyCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { CounterContext } from '../../context/CounterContext';

export default function MyCard({product}) {
   let {increase} =useContext(CounterContext)
    let{id,title,image,description,category ,rating:{count},}=product;
  return (
    <div className='col-6 col-md-3'>
    
    <Card  className='h-100 p-4'>
    <Card.Img variant='top' src={image} className="myImage" />
      <Card.Body className='d-flex flex-column' >
      
        <Card.Title className='text-danger'>{title}</Card.Title>
        <Card.Text className='edit-d text-danger' >{description}</Card.Text>
        <Card.Text className='text-danger' >{category}</Card.Text>
        <Card.Text className='bg-dark text-danger' >Count is : <strong className='text-light'>{count}</strong></Card.Text>
      <div className='row'>
      <div className='col-6 g-2'>
      <NavLink to={ `/products/${id}`} className='bg-danger text-light p-1 w-2'>Show Details</NavLink>
      </div>
      <div className='col-6 g-2'>
      <button onClick={increase} className='bg-danger text-light  '>Add </button>
      </div>
      </div>
      </Card.Body>
    </Card>
    
    
    
    </div>
  );
}

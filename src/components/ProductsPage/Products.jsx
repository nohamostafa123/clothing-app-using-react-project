
import MyCard from './MyCard'
export default function Products({products}) {
 
   
     let productList=()=>{
     return products.map((product)=>(
         <MyCard key={product.id} product={product}/>
        ));
       
  };
  return (
    <div className='bg-dark text-light mb-1 p-4'>
    <h1>Products Page</h1>
    <div className='container'>
  <div className='row g-2'>{productList()}</div>
    </div>
    </div>
  )
}

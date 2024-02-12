
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails({products}) {
  let {id}=  useParams();
  let getProduct = () => {
    return products.filter(product=> product.id==id)[0] ;
  };
  let product =  getProduct();
  let navigate = useNavigate();
 let goToHome = () => {
    navigate("/products");
 };
  return (
    <div className='alert alert-secondary'>
     <div className='container bg-light p-3 rounded'>
     <h1>Your Product{products?.id}</h1>
     <img src={product?.image} alt=""/>
     <p>Hello Price:{product?.price}</p>
     <button onClick={goToHome}>Go to Products</button>
     </div> 
    </div>
  );
}


import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import MyFooter from "./components/HomePage/MyFooter";
import MyNav from "./components/MyNav";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Products from "components/ProductsPage/Products";
import ProductDetails from "components/ProductDetails/ProductDetails";
import About from "./components/HomePage/About";
import ContactUs from "./components/HomePage/ContactUs";
import Error from "./components/ErrorPage/Error";
import { useEffect, useState } from "react";

function App() {
  let baseURL="https://fakestoreapi.com/products";
  let [products,setProducts] = useState([]);
   let getAllProducts=()=>{

    axios.get(baseURL)
    .then((response)=>{
      setProducts(response.data);
      console.log("response.data",response.data);
      })
      .catch((error)=>{
          console.log(error);
      });
   };
   let addProduct=(product)=>{
    axios.post(baseURL,product);
   };
   let editProduct=(product,id)=>{
    axios.put(`${baseURL}/${id}`,product);
   };
   let deleteProduct=(id)=>{
    axios.put(`${baseURL}/${id}`);
   };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="App">
   <MyNav/>
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="home" element={<Navigate to="/"/>}/>
    <Route path="about" element={<About></About>}/>
    <Route path="contactUS" element={<ContactUs></ContactUs>}/>
    <Route path="products" element={<Products products={products}/>}/>
    <Route path="*" element={<Error></Error>}/>
    <Route path="products/:id" element={<ProductDetails products={products}/>}/>
    <Route path="products" element={<Products></Products>}/>
    </Routes>
     <MyFooter></MyFooter>
     </div>
  );
}

export default App;

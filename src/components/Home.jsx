import React, { useContext } from "react";
import { Cart } from "../context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: {byStock, byDelivery, byRating, sort , searchQuery}
  } = useContext(Cart);
  const transformProducts=()=>{
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=> sort === "lowToHigh" ? a.price - b.price : b.price - a.price);
    }
    if(!byStock){
      sortedProducts = sortedProducts.filter(p=>p.inStock);
    }
    if(byDelivery){
      sortedProducts = sortedProducts.filter(p=>p.fastDelivery);
    }
    if(byRating){
      sortedProducts = sortedProducts.filter(p=>p.ratings >= byRating);
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter(p=>p.name.toLowerCase().includes(searchQuery));
    }
    return  sortedProducts;
  }
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((product)=>{
          return (
            <SingleProduct prod={product} key={product.id}/>
            )
        }
        )}
      </div>
    </div>
  );
};

export default Home;
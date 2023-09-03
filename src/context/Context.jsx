import React, { createContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducer';

export const Cart = createContext();

const Context = ({ children }) => {
// faker.seed(99);
  const products = [...Array(100)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state , dispatch] = useReducer(cartReducer , {
    products:products,
    cart:[]
  });

  const [productState , productDispatch] = useReducer(productReducer , {
    sort:'',
    byStock: false,
    byDelivery: false,
    byRating: 0,
    searchQuery: "",
  })

  return (
    <Cart.Provider value={{state , dispatch , productState , productDispatch}} >
      {children}
    </Cart.Provider>
  );
};

export default Context;
import React, { useState, useContext, useEffect } from 'react'

const AppStateContext = React.createContext();

export const useAppState = () => useContext(AppStateContext);

export const ContextProvider = ({ children }) => {
    const [toggleButton, SetToggleButton] = useState(false)
    const [isLoading, setIsLoading] = useState(false) 
    const [cart, setCart] = useState([]) 
    const [totalItems, settotalItems] = useState(0) 

    useEffect(() => {
        const calculateTotalItems = () =>
          cart.reduce((total, item) => total + item.quantity, 0);
        settotalItems(calculateTotalItems());
      }, [cart]);


      function addToCart(newItem) {
        console.log('newItem', newItem);
      
        setCart((prevCart) => {
          const existingItemIndex = prevCart.findIndex((item) => item.id === newItem.id);
      
          if (existingItemIndex !== -1) {
            return prevCart.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [
              ...prevCart,
              {
                ...newItem,
                quantity: 1,
              },
            ];
          }
        });
      }
      
      
      console.log('cart', cart)

    const contextValues={toggleButton, SetToggleButton, cart, setCart, isLoading, setIsLoading, addToCart, totalItems}

    return (
        <AppStateContext.Provider value={contextValues}>
        {children}
      </AppStateContext.Provider>
    )
}

export default ContextProvider
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


  function addToCart(newItem, quantity) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...newItem,
            quantity: quantity,
          },
        ];
      }
    });
  }

  function clearCart() {
    setCart([]);
  }

  const contextValues = { toggleButton, SetToggleButton, cart, setCart, isLoading, setIsLoading, addToCart, totalItems, clearCart }

  return (
    <AppStateContext.Provider value={contextValues}>
      {children}
    </AppStateContext.Provider>
  )
}

export default ContextProvider
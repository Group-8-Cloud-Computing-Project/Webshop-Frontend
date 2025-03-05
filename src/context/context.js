import React, { useState, useContext, useReducer, useEffect } from 'react'

const AppStateContext = React.createContext();

export const useAppState = () => useContext(AppStateContext);

const initialState = {
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [toggleButton, SetToggleButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState([])
  const [totalItems, settotalItems] = useState(0)
  const [cartError, setCartError] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const calculateTotalItems = () =>
      cart.reduce((total, item) => total + item.quantity, 0);
    settotalItems(calculateTotalItems());
  }, [cart]);


  function addToCart(newItem, quantity) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        return prevCart.map((item, index) => {
          if (index === existingItemIndex) {
            if (item.quantity + quantity > item.available_quantity) {
              setCartError('Sorry, we only have ' + item.available_quantity + ' of this item in stock. Please reduce your quantity.');
              return item;
            }
            return { ...item, quantity: Number(item.quantity) + Number(quantity) }
          }
          else {
            return item;
          }
        });
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

  const contextValues = { toggleButton, SetToggleButton, cart, setCart, isLoading, setIsLoading, addToCart, totalItems, clearCart, state, dispatch, cartError, setCartError }

  return (
    <AppStateContext.Provider value={contextValues}>
      {children}
    </AppStateContext.Provider>
  )
}

export default ContextProvider
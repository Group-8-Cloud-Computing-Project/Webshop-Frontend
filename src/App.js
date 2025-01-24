import React from 'react'
import Layout from './components/Layout';
import ContextProvider from "./context/context"

 
function App() { 
 
  return (
    <ContextProvider >
      <Layout />
    </ContextProvider>
  );
}

export default App;

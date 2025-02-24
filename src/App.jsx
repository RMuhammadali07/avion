import React from 'react'
import Header from './components/header/Header'
import Footers from './components/footers/Footers'
import Homes from './pages/homes/Homes'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products/Products'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footers />
    </div>
  );
}

export default App

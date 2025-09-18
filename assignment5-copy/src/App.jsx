
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import SignIn from './pages/SignIn'
import { ProductProvider } from './context/ProductContext'

export default function App(){
  return (
    <ProductProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 p-6 container-custom">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
          <div className="text-center">
            <p className="mb-2">Back to top ↑</p>
            <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ProductProvider>
  )
}

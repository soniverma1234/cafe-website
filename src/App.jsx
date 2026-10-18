import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Bestsellers from './components/Bestsellers'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-cream font-body text-espresso-800">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <MenuSection />
          <About />
          <Bestsellers />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <Toast />
        <BackToTop />
      </div>
    </CartProvider>
  )
}

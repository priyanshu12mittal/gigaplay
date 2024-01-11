import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Features from './components/Features'
import Award from './components/Award'
import Games from './components/Games';
import About from './components/About';
import Experience from './components/Experience';
import WorkWithUs from './components/WorkWithUs';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {

  return (
    <div className=' bg-gray-900 scroll-smooth snap-y'>
      <div className=' animate-slide relative bg-[url(assets/bg.png)] bg-fixed bg-cover bg-left md:bg-center min-h-screen w-full m-0'>
        <Navbar></Navbar>
        <Home></Home>
        <Features></Features>
        <Award></Award>
      </div>
      <div className=' animate-slide bg-[url(./assets/bg1.png)] bg-cover h-full'>
        <div className=' max-w-[1440px] w-full mx-auto p-5'>
          <Games></Games>
          <About></About>
        </div>
        <div className=' -mt-48 h-96  w-full bg-gradient-to-b from-transparent to-gray-900'></div>
      </div>
      <div className=' relative max-w-[1440px] w-full mx-auto p-5'>
        <Experience></Experience>
        <div className=' absolute md:static inset-0 w-full h-screen flex items-start justify-start'>
          <div className=' h-[300px] w-1/2 -ml-[30%] gradient-01'></div>
        </div>
      </div>
      <div className=' relative max-w-[1440px] w-full mx-auto p-5'>
        <WorkWithUs></WorkWithUs>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App

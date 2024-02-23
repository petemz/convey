import './App.css';
// import logo from "./Assets/convey-logo.svg";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Forgot from './Pages/Forgot';
import { useState } from 'react';
import { Logo } from './Assets/Icons';
import ScrollToTop from './Components/ScrollTop';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/account-recovery",
    element: <Forgot />,
  },
])

function App() {
  const [showBanner, setShowBanner] = useState(true)
  setTimeout(() => {
    setShowBanner(false)
  }, 2000)

  return (
    <div className=" h-screen w-full overflow-y-auto">
      {showBanner &&
        <div className='h-full w-full -md:hidden fixed z-10 bg-slate-200'>
          <div className='h-full flex-center text-white bg-primary-blue'>
            <div className="h-16">
              <Logo/>          
            </div>
          </div>
        </div>
      }

      <div className='h-full flex'>
        <div className='md:hidden w-1/2 h-full flex-center flex-shrink-0 text-white bg-primary-blue'>
          <div className="h-16">
            <Logo/>          
          </div>
        </div>
        
        <div className='-md:w-1/2 overflow-y-auto'>
          <ScrollToTop />
          <RouterProvider router={router} />          
        </div>
      </div>
    </div>
  );
}

export default App;
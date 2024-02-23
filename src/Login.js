import Button from './Components/Button';
import EyeIcon from "./Assets/eye-icon.svg";
import { Logo2 } from './App';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='px-6 pt-12 pb-9 flex-center-y flex-col flex-shrink-0'>
      <div className='w-full flex flex-col items-center'>
        <div className="w-full mb-10 p-10 flex-center-x text-primary-blue border border-primary-blue rounded-[10px]">
          <div className="w-[70%]">
            <Logo2/>          
          </div>          
        </div>

        <div className='mb-10'>
          <h1 className='mb-5 text-2xl font-medium'>Log in</h1>
          <div className='flex flex-col gap-5'>
            <input className="max-w-[500px] h-12 px-3 leading-none border border-zinc-400 rounded-md" type="text" name="" id="" placeholder="Username / Phone Number" />
            <div className='max-w-[500px] relative'>
              <input className="w-full h-12 px-3 leading-none border border-zinc-400 rounded-md" type="text" name="" id="" placeholder="Password" />
              <button className='absolute top-3.5 right-5'>
                <img src={EyeIcon} alt=""/>                  
              </button>
            </div>
            <Link to="/account-recovery" className='text-right cursor-pointer'>Forgot Password?</Link>
          </div>
        </div>
      </div>

      <div>        
        <Button text={"Log In"}/>
        <p className='mt-6 text-center'>Don't have an account? <Link to="/signup" className='text-primary-orange underline'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
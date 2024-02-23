import { Link, useNavigate } from "react-router-dom";
import map from "./Assets/world-map.svg";
import Button from "./Components/Button";

const Home = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{
    navigate("/signup");
  }

  return (
    <div className='h-full px-6 pt-20 pb-9 flex-center-y flex-col justify-between flex-shrink-0 text-center'>
      <div>
        <img className='w-80 mx-auto mb-6' src={map} alt="" />
        <h1 className='mb-3 text-2xl font-medium'>Build Connections</h1>
        <p>With convey, you can reach more clients requesting for your service. It helps you expand your business while earning more.</p>
      </div>

      <div>
        <div className='mb-5 flex justify-center gap-2'>
          <div className='w-1.5 h-1.5 bg-neutral-300 rounded-full'></div>
          <div className='w-1.5 h-1.5 bg-neutral-300 rounded-full'></div>
          <div className='w-1.5 h-1.5 bg-neutral-300 rounded-full'></div>
          <div className='w-1.5 h-1.5 bg-neutral-300 rounded-full'></div>
          <div className='w-1.5 h-1.5 bg-neutral-300 rounded-full'></div>
        </div>
        <Button onClick={routeChange} text={"Sign up"}/>
        <p className='mt-6'>Already have an account? <Link to="/login" className='text-primary-blue'>Log in</Link></p>
      </div>
    </div>
  )
}

export default Home
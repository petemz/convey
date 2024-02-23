import { useEffect, useState } from "react";
import Button from '../Components/Button';
import EyeIcon from "../Assets/eye-icon.svg";
import { 
  UserIcon, 
  TruckIcon, 
  BuildingIcon 
} from "../Assets/Icons";
import SuccessIcon from "../Assets/success-icon.svg";
import AngleRight from "../Assets/angle-right.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [stage, setStage] = useState(1)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    contactName: "",
    email: "",
    phoneNumber: {number: "", countryCode: ""},
    password: "",
    rePassword: "",
    refCode: "",
    userType: "",
  })

  return (
    <>
      {stage === 1 ?
        <SignUp1 user={user} setUser={setUser} setStage={setStage} />
      :stage === 2 ?
        <SignUp2 user={user} setUser={setUser} setStage={setStage} />
      :
        <Success />
      }
    </>
  )
}

const SignUp1 = ({ user, setUser, setStage }) => {
  const [isDisabled, setIsDisabled] = useState(user.userType === "")

  const handleType = (type) => {
    setUser({...user, userType: type})
    setIsDisabled(false)
  }
  
  let navigate = useNavigate(); 
  const routeChange = () =>{
    navigate("/");
  }

  return (
    <div className='h-full px-6 pt-8 pb-9 flex flex-col justify-between'>
      <div>
        <button
          onClick={() => routeChange("/")}
          className='w-10 h-10 mb-10 flex-center bg-stone-50 rounded-full'
        >
          <img src={AngleRight} alt="" />
        </button>

        <h1 className='mb-5 text-2xl font-medium'>Sign up</h1>
        <div className='grid gap-5 text-primary-blue'>
          <div 
            onClick={() => handleType(1)}
            className={`
              flex px-4 py-3 gap-5 group border border-black rounded-lg cursor-pointer
              ${user.userType === 1 ? "text-white bg-neutral-500" : "hover:text-white hover:bg-neutral-500"}
            `}
          >
            <div className="flex-center w-max">
              <UserIcon />
            </div>
            <div>
              <p className='font-medium'>Individual</p>
              <p className={`text-sm ${user.userType === 1 ? "text-white" : "group-hover:text-white text-zinc-500"}`}>You want to register with Convey as an individual</p>            
            </div>
          </div>
          <div 
            onClick={() => handleType(2)}
            className={`
              flex px-4 py-3 gap-5 group border border-black rounded-lg cursor-pointer
              ${user.userType === 2 ? "text-white bg-neutral-500" : "hover:text-white hover:bg-neutral-500"}
              `}
          >
            <div className="flex-center w-max">
              <TruckIcon />
            </div>
            <div>
              <p className='font-medium'>Company Rider</p>
              <p className={`text-sm ${user.userType === 2 ? "text-white" : "group-hover:text-white text-zinc-500"} `}>You work with a registered company as an individual</p>            
            </div>
          </div>
          <div 
            onClick={() => handleType(3)}
            className={`
              flex px-4 py-3 gap-5 group border border-black rounded-lg cursor-pointer
              ${user.userType === 3 ? "text-white bg-neutral-500" : "hover:text-white hover:bg-neutral-500"}  
            `}
          >
            <div className="flex-center w-max">
              <BuildingIcon />
            </div>
            <div>
              <p className='font-medium'>Company</p>
              <p className={`text-sm ${user.userType === 3 ? "text-white" : "group-hover:text-white text-zinc-500"}`}>You want to register with Convey</p>            
            </div>
          </div>
        </div>        
      </div>

      <Button onClick={() => setStage(2)} text={"Proceed to Sign up"} isDisabled={isDisabled}/>
    </div>
  )
}

const SignUp2 = ({ user, setUser, setStage}) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  const check = () => {
    if(
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.email.length > 0 &&
      user.phoneNumber.number.length === 10 &&
      user.password.length > 7 && 
      user.rePassword === user.password
    ){
      setIsDisabled(false)
    } else setIsDisabled(true)
  }

  const handleForm = (e) => {
    const value = e.target.value
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case "firstName":
        setUser({ ...user, firstName: value });
        break;
      case "lastName":
        setUser({ ...user, lastName: value });
        break;
      case "companyName":
        setUser({ ...user, companyName: value });
        break;
      case "contactName":
        setUser({ ...user, contactName: value });
        break;
      case "email":
        setUser({ ...user, email: value });
        break;
      case "phoneNumber":
        setUser({ ...user, phoneNumber: {...user.phoneNumber, number: value }});
        break;
      case "countryCode":
        setUser({ ...user, phoneNumber: {...user.phoneNumber, countryCode: value}});
        break;
      case "password":
        setUser({ ...user, password: value });
        break;
      case "rePassword":
        setUser({ ...user, rePassword: value });
        break;
      case "refCode":
        setUser({ ...user, refCode: value });
        break;
    }
  }

  const togglePasswordVisibility = (type) => {
    type === "main" ? setShowPassword(true) : setShowRePassword(true)
    setTimeout(() => {
      type === "main" ? setShowPassword(false) : setShowRePassword(false);
    }, 250); // Hide password after 0.25 second
  };

  useEffect(() => {
    check()
  }, [user])

  // const restrictSpace = (e) => {
  //   if (e.keyCode === 32) {
  //     return false;
  //   }
  // }

  return (
    <div className='px-6 pt-8 pb-20 flex flex-col'>
      <div>
        <button onClick={() => setStage(1)} className='w-10 h-10 mb-10 flex-center bg-stone-50 rounded-full'>
          <img src={AngleRight} alt="" />
        </button>

        <h1 className='mb-5 text-2xl font-medium'>Sign up</h1>

        <div className='mb-12 flex flex-col gap-5'>
          <input 
            value={user.firstName}
            onChange={handleForm} 
            className="h-12 px-3 leading-none border border-zinc-400 rounded-md" 
            type="text" name={user.userType === 1 ? "firstName" : "companyName"} id={user.userType === 1 ? "firstName" : "companyName"}
            required
            placeholder={user.userType === 1 ? "First Name" : "Company Name"} 
          />

          <input
            value={user.lastName}
            onChange={handleForm} 
            className="h-12 px-3 leading-none border border-zinc-400 rounded-md" 
            type="text" name={user.userType === 1 ? "lastName" : "contactName"} id={user.userType === 1 ? "lastName" : "contactName"}
            required
            placeholder={user.userType === 1 ? "Last Name" : "Contact Name"} 
          />

          <input
            value={user.email}
            onChange={handleForm} 
            className="h-12 px-3 leading-none border border-zinc-400 rounded-md" 
            type="email" name="email" id="email"
            required 
            placeholder="Email Address" 
          />

          <div className='h-12 flex-center-y border border-zinc-400 rounded-md'>
            <div className='w-max h-full flex-center-y px-3 flex-shrink-0 text-zinc-400 border-r cursor-pointer'>+234 <span className='ml-2 rotate-180'>^</span></div>
            <input
              value={user.phoneNumber.number}
              onChange={handleForm} 
              className="w-full h-full px-3 leading-none" 
              type="tel" name="phoneNumber" id="phoneNumber" 
              maxLength={10} pattern="[0-9]" required
              onkeypress="return /[0-9]/i.test(event.key)"
              placeholder="Phone Number" 
            />
          </div>

          <div className='relative'>
            <input
              value={user.password}
              onChange={handleForm}
              className="w-full h-12 px-3 leading-none border border-zinc-400 rounded-md" 
              type={showPassword ? "text" : "password"}
              name="password" id="password"
              placeholder="Password" 
            />
            <button
              onClick={() => togglePasswordVisibility("main")}
              className='absolute top-3.5 right-5'
            >
              <img src={EyeIcon} alt=""/>                  
            </button>
          </div>

          <div className='relative'>
            <input
              value={user.rePassword}
              onChange={handleForm} 
              className="w-full h-12 px-3 leading-none border border-zinc-400 rounded-md" 
              type={showRePassword ? "text" : "password"}
              name="rePassword" id="rePassword"
              required
              placeholder="Confirm Password" 
            />
            <button
              onClick={() => togglePasswordVisibility("re")}
              className='absolute top-3.5 right-5'
            >
              <img src={EyeIcon} alt=""/>                  
            </button>
          </div>

          <input
            value={user.refCode}
            onChange={handleForm} 
            className="h-12 px-3 leading-none border border-zinc-400 rounded-md" 
            type="text" name="refCode" id="refCode" 
            placeholder="Referral code (if available)" 
          />
        </div>
      </div>

      <Button text={"Sign up"} onClick={() => setStage(3)} isDisabled={isDisabled}/>        
    </div>
  )
}

const Success = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{
    navigate("/");
  }

  return (
    <div className='px-6 pt-8 pb-9 flex flex-col justify-between'>
      <button
        onClick={() => routeChange("/")}
        className='w-10 h-10 flex-center bg-stone-50 rounded-full'
      >
        <img src={AngleRight} alt="" />
      </button>
      <div className='h-full flex-center flex-col'>
        <p className=' text-2xl font-medium'>Successful!</p>
        <img className='w-40 my-16' src={SuccessIcon} alt="success icon" />
        <p className='mb-10 text-center'>An account has been created for you. You can update your profile to start earning.</p>
        <Button text={"Continue"}/>
      </div>
    </div>
  )
}

export default SignUp
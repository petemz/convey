import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Components/Button";
import AngleRight from "./Assets/angle-right.svg";
import EyeIcon from "./Assets/eye-icon.svg";

const Forgot = () => {
  const [stage, setStage] = useState(1)

  return (
    <>
      {stage === 1 ?
        <Recovery setStage={setStage} />
      :stage === 2 ?
        <Verification setStage={setStage} />
      :
        <Reset setStage={setStage} />
      }
    </>
  )
}

const Recovery = ({setStage}) => {
  const [email, setEmail] = useState("")
  const [isDisabled, setIsDisabled] = useState(email === "")
  
  const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  useEffect(() => {
    email.length > 4 ? 
      setIsDisabled(false)
    :
      setIsDisabled(true)
  }, [email])

  let navigate = useNavigate(); 
  const routeChange = () =>{
    navigate("/");
  }

  return (
    <div className="w-full px-6 pt-12">
      <button onClick={() => routeChange()} to="/login" className='w-10 h-10 mb-10 flex-center bg-stone-50 rounded-full'>
        <img src={AngleRight} alt="" />
      </button>

      <h1 className='mb-5 text-2xl font-medium'>Forgot Password?</h1>
      <p className="mb-7">Enter your registered email to get a reset code</p>
      <input
        value={email}
        onChange={handleEmail} 
        className="w-full h-12 mb-10 px-3 leading-none border border-zinc-400 rounded-md" 
        type="email" name="email" id="email"
        required 
        placeholder="Email Address" 
      />

      <Button onClick={() => setStage(2)} text={"Request Reset Code"} isDisabled={isDisabled}/>
    </div>
  )
}

const Verification = ({setStage}) => {
  const [code, setCode] = useState("")
  const [isDisabled, setIsDisabled] = useState(code === "")
  
  const handleCode = (e) => {
    const value = e.target.value
    setCode(value)
  }

  useEffect(() => {
    code.length > 4 ? 
      setIsDisabled(false)
    :
      setIsDisabled(true)
  }, [code])

  return (
    <div className="w-full px-6 pt-12">
      <button 
        onClick={() => setStage(1)}  
        className='w-10 h-10 mb-10 flex-center bg-stone-50 rounded-full'
      >
        <img src={AngleRight} alt="" />
      </button>

      <h1 className='mb-5 text-2xl font-medium'>Forgot Password</h1>
      <p className="mb-7">Enter reset code sent to ****xyz@gmail.com</p>
      <input
        value={code}
        onChange={handleCode} 
        className=" w-full h-12 mb-10 px-3 leading-none tracking-[40px] outline-none border-zinc-400 rounded-md" 
        type="email" name="email" id="email" maxLength={5}
        required 
        placeholder="*****" 
      />

      <Button onClick={() => setStage(3)} text={"Submit"} isDisabled={isDisabled}/>
    </div>
  )
}

const Reset = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{
    navigate("/");
  }

  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [isDisabled, setIsDisabled] = useState(password === "")
  
  const handlePassword = (e) => {
    const value = e.target.value
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case "password":
        setPassword(value);
        break;
      case "rePassword":
        setRePassword(value);
        break;
    }
  }
  

  useEffect(() => {
    password.length > 7 && rePassword === password ? 
      setIsDisabled(false)
    :
      setIsDisabled(true)
  }, [password, rePassword])

  return (
    <div className="w-full px-6 pt-12">
      <button onClick={() => routeChange()} className='w-10 h-10 mb-10 flex-center bg-stone-50 rounded-full'>
        <img src={AngleRight} alt="" />
      </button>

      <h1 className='mb-5 text-2xl font-medium'>New Password</h1>
      <p className="mb-7">Enter new password and save</p>
      <div className="mb-14">
        <div className='mb-5 relative'>
          <input
            value={password}
            onChange={handlePassword}
            className="w-full h-12 px-3 leading-none border border-zinc-400 rounded-md" 
            type="password" name="password" id="password"
            required pattern="[0-9]{4}"
            placeholder="Password" 
          />
          <button className='absolute top-3.5 right-5'>
            <img src={EyeIcon} alt=""/>                  
          </button>
        </div>

        <div className='relative'>
          <input
            value={rePassword}
            onChange={handlePassword} 
            className="w-full h-12 px-3 leading-none border border-zinc-400 rounded-md" 
            type="password" name="rePassword" id="rePassword"
            required
            placeholder="Confirm Password" 
          />
          <button className='absolute top-3.5 right-5'>
            <img src={EyeIcon} alt=""/>                  
          </button>
        </div>        
      </div>

      <Button onClick={() => {}} text={"Save Password"} isDisabled={isDisabled}/>
    </div>
  )
}

export default Forgot
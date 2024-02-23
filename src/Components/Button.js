const Button = ({text, isDisabled}) => {
  return (
    <button disabled={isDisabled} className={`h-12 w-full flex-center ${isDisabled && "pointer-events-none"} text-white font-medium bg-primary-blue relative`}>
      <span>{text}</span>
      {isDisabled &&
        <div className="w-full h-full absolute bg-white opacity-50"></div>
      }
    </button>
  )
}

export default Button
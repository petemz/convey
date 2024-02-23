const Button = ({text, isDisabled, onClick}) => {
  return (
    <button 
      onClick={onClick ? () => onClick() : null} 
      disabled={isDisabled} 
      className={`
        h-12 w-full flex-center text-white font-medium bg-primary-blue relative
        ${isDisabled && "pointer-events-none"}
      `}
    >
      <span>{text}</span>
      {isDisabled &&
        <div className="w-full h-full absolute bg-white opacity-50"></div>
      }
    </button>
  )
}

export default Button
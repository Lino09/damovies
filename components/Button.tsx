import { ButtonProps } from "@/utils/types";

const Button = ({disabled=false, children, type, variant='primary', onClick}: ButtonProps) => {
  const varianStyles = {
    primary: 'cursor-pointer bg-gradient-to-r from-dacolors-cyan via-dacolors-blue to-dacolors-purple shadow-md hover:scale-105',
    secondary: 'cursor-pointer bg-dacolors-bgc border border-white shadow-md hover:scale-105',
    danger: 'cursor-pointer bg-pink-600 text-red-900 shadow-md hover:scale-105'
  }
  const disabledStyles = 'bg-gray-400 text-white cursor-not-allowed'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-2 h-16 rounded-full w-64 text-xl font-semibold active:scale-100 ${disabled ? disabledStyles: varianStyles[variant]}`}
    >
      {children}
    </button>)
}
export default Button
import { InputProps } from "@/utils/types"

const Input = ({type, label, name, value, checked, onChange }:InputProps) => {
  if(type === 'checkbox') {
    return (
      <label htmlFor="name">
        <span>{label}</span>
        <input type={type} id={name} name={name} checked={checked} onChange={(e) => onChange(name, e.target.checked )} />
      </label>
    )
  }

  return (
    <label htmlFor="name">
      <span>{label}</span>
      <input type={type} id={name} name={name} value={value} onChange={(e) => onChange(name, e.target.value )} />
    </label>
  )

}
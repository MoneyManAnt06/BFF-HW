interface InputProps {
    value: string,
    placeholder: string,
    handleChange: (e: React.ChangeEvent<
        HTMLInputElement>)=> void,
    name: string,
    type: string
}

const Input = ({value, placeholder, handleChange, name}: InputProps) => {
  return (
    <input 
        className="text-black"
        value={value} 
        placeholder={placeholder} 
        name={name} 
        onChange={handleChange}
    />
  )
}

export default Input

export interface InputInterface {
  onChange?: any,
  placeholder?: string,
  options?: any,
}

export default function Input ({onChange, placeholder, options}: InputInterface) {

  function returnOnChange(res: any) {
    onChange(res.target.value);
  }

  return (
    <input className="input" placeholder={placeholder} onChange={returnOnChange} {...options} />
  )
}

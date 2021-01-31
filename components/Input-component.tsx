import Input from '../element/Input';

export interface InputComponentOptions {
  labelOptions?: any,
  inputOptions?: any,
}

export interface InputComponent {
  onChange?: any,
  label?: string,
  placeholder?: string,
  options?: InputComponentOptions,
}

export default function InputComponent ({onChange, label, placeholder, options}: InputComponent) {

  return (
    <div className="pt-2 pb-2">
      <p { ...options?.labelOptions } className="mb-1 pl-0.5">
        {label}
      </p>
      <Input { ...options?.inputOptions } placeholder={label ?? placeholder}  onChange={onChange} />
    </div>
  )
}

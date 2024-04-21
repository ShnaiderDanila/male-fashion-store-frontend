import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

type RadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  value: string;
  iconSrc?: string;
  iconAlt?: string;
  error?: string;
  children?: ReactNode;
};

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(function Comp(
  { id, value, iconSrc, iconAlt, error, children, ...inputParams },
  ref,
) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="flex items-center w-full cursor-pointer p-3 rounded-sm has-[:checked]:border hover:bg-white-medium"
      >
        <input
          type="radio"
          id={id}
          value={value}
          ref={ref}
          className="hidden peer"
          {...inputParams}
        />
        <div className="mr-3 w-4 h-4 border rounded-full bg-transparent peer-checked:border-4"></div>
        <span className="flex-1 mr-3">{value}</span>
        <img src={iconSrc} alt={iconAlt} className="justify-self-end"></img>
      </label>

      {error && <p className="text-red text-sm">{error}</p>}
      {children}
    </div>
  );
});

export default RadioInput;

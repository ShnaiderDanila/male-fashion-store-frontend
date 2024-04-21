import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelTitle?: string;
  inputId: string;
  error?: string;
  children?: ReactNode;
  className?: string;
  clearField?: () => void;
};

const defaultClassName =
  'w-full text-primary pl-3 pr-10 py-2 border border-gray outline-primary rounded-sm flex-1';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(function Comp(
  {
    labelTitle,
    inputId,
    error,
    clearField,
    className = defaultClassName,
    children,
    ...inputParams
  },
  ref,
) {
  return (
    <div className="flex flex-col relative gap-2 w-full">
      <label htmlFor={inputId} className="text-sm">
        {labelTitle}
      </label>
      <input id={inputId} ref={ref} {...inputParams} className={className} />
      <p className="text-red text-sm">{error}</p>

      {clearField && (
        <button
          type="button"
          className={`absolute ${labelTitle ? 'top-7 right-0' : 'top-2 right-0'} p-[13px]`}
          onClick={clearField}
        >
          <IoMdCloseCircle className="text-primary-light" />
        </button>
      )}

      {children}
    </div>
  );
});

export default FormInput;

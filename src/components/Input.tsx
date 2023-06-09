import { InputHTMLAttributes } from "react";

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <fieldset className="mb-[15px] flex items-center gap-5">
      <label
        className="text-slate-900 w-[90px] text-right text-[15px]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="text-slate-800 focus:shadow-slate-700 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
        id={name}
        defaultValue=""
        {...rest}
      />
    </fieldset>
  );
}

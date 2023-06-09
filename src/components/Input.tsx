import { InputHTMLAttributes } from "react";

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <fieldset className="mb-[15px] flex flex-col gap-1">
      <label className="text-slate-900 text-[15px]" htmlFor={name}>
        {label}
      </label>
      <input
        className="inline-block h-[35px] w-full flex-1 rounded-[4px] p-2 text-slate-800 focus:shadow-slate-500 text-base shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
        id={name}
        defaultValue=""
        {...rest}
      />
    </fieldset>
  );
}

import { ReactNode } from "react";
import * as D from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type DialogProps = {
  trigger: ReactNode;
  children: ReactNode;
  title: string;
  desc: string;
};

export function Dialog({ trigger, title, desc, children }: DialogProps) {
  return (
    <D.Root>
      <D.Trigger asChild>{trigger}</D.Trigger>
      <D.Portal>
        <D.Overlay className="bg-slate-700 bg-opacity-90 fixed inset-0 z-20" />
        <D.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-20 overflow-y-auto">
          <D.Title className="m-0 text-[17px] font-medium">{title}</D.Title>
          <D.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            {desc}
          </D.Description>
          {children}
          <D.Close asChild>
            <X className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] text-slate-950 cursor-pointer rounded-full transition-all hover:text-slate-50 hover:bg-slate-400" />
          </D.Close>
        </D.Content>
      </D.Portal>
    </D.Root>
  );
}

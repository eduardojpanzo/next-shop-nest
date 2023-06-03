import { ReactNode } from "react";

interface TagsProps {
  Icon: ReactNode;
  name: string;
}

export function Tag({ Icon, name }: TagsProps) {
  return (
    <div className="w-[300px] p-3 flex items-center justify-center gap-3 border border-slate-300">
      {Icon}
      <span className="italic">{name}</span>
    </div>
  );
}

import { BoxIcon } from "lucide-react";

const tagsData = [
  { key: 1, name: "some", Icon: <BoxIcon /> },
  { key: 2, name: "thinds", Icon: <BoxIcon /> },
  { key: 3, name: "", Icon: <BoxIcon /> },
];

export function Tags() {
  return (
    <div className="flex flex-col justify-between items-center gap-4 py-10 md:flex-row">
      {tagsData.map(({ key, name, Icon }) => (
        <div
          key={key}
          className="w-[300px] p-3 flex items-center justify-center gap-3 border border-slate-300"
        >
          {Icon}
          <span className="italic">{name}</span>
        </div>
      ))}
    </div>
  );
}

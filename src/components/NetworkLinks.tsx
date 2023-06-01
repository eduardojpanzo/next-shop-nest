import { Facebook, Twitter, Instagram } from "lucide-react";

const outLinks = [
  { Icon: Facebook, name: "facebook" },
  { Icon: Twitter, name: "twitter" },
  { Icon: Instagram, name: "inst" },
];

export function NetworkLinks() {
  return (
    <ul className="flex items-center gap-2">
      {outLinks.map(({ Icon, name }) => (
        <li
          className="transition-all cursor-pointer hover:text-red-500"
          key={name}
        >
          {<Icon />}
        </li>
      ))}
    </ul>
  );
}

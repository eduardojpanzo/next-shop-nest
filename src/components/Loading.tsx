import { ThreeDotsLoader } from "./ThreeDotsLoader";

export default function Loading() {
  return (
    <div className="flex-1 h-[calc(100vh-68.9px)] bg-gray-800 flex items-center justify-center">
      <ThreeDotsLoader />
    </div>
  );
}

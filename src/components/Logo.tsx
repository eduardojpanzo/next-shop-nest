import Image from "next/image";

export function Logo() {
  return (
    <h1>
      <Image src={"/logo-v.png"} alt="logo" width={100} height="42" priority />
    </h1>
  );
}

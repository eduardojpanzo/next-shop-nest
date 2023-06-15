import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Input from "./Input";
import { useAuth } from "@/hooks/auth";

export function SignInForm() {
  const router = useRouter();
  const { logIn } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await logIn({
      email: "jep@gmail.com",
      password: "12345678",
    });

    //router.push("/");
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input name="email" type="email" label="E-mail" />

      <Input name="password" type="password" label="Palavra Passe" />

      <button className="text-white bg-red-500 self-start" type="submit">
        Entrar
      </button>
    </form>
  );
}

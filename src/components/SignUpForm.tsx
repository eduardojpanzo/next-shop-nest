import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/auth";
import { FormEvent } from "react";
import Input from "./Input";

export function SignUpForm() {
  const router = useRouter();
  const { register } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await register({
      name: "Joao",
      email: "jep@gmail.com",
      password: "12345678",
    });

    router.push("/login");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input name="name" type="text" label="Nome " />

      <Input name="email" type="email" label="E-mail" />

      <Input name="password" type="password" label="Palavra Passe" />

      <Input
        name="confPassword"
        type="password"
        label="Confirme a Palavra Passe"
      />

      <button className="text-white bg-red-500 self-start" type="submit">
        Entrar
      </button>
    </form>
  );
}

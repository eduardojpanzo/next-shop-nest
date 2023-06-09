import Input from "./Input";

export function SignInForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input name="email" type="email" label="E-mail" />

      <Input name="password" type="password" label="Palavra Passe" />

      <button className="text-white bg-red-500 self-start" type="submit">
        Entrar
      </button>
    </form>
  );
}

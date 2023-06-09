import Input from "./Input";

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-4">
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

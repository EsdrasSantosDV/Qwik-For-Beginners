import { component$, $ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/header-message/hello-message";

export default component$(() => {
  const messages = ["Hwllo", "Welcome", "Learn ANgular"];

  let index = 0; //Há algum estado acontecendo aqui que é representado aqui pela propriedade index.

  /*
    Essas funções de renderização devem ser chamadas apenas uma vez quando o componente 
    for renderizado, na primeira vez  
    que a página é carregada e então ela só deve ser chamada novamente se a
     */
  return (
    <>
      {/*ISSO IRIA FUNCIONAR SE TIVESSE NO ANGULAR POR EXEMPLO, PQ E COMPATIVEL COM O ESTADO MUTAVEL*/}
      <h1>Qwik Stores</h1>

      {/*MAS O QWIK NÃO FICA COMPARANDO A ARVORE DE COMPONENTE INTEIRA PRA VER SE TEVE MUDANÇAS*/}
      <h3>{messages[index]}</h3>
      {/*VERIFA*/}
      <button onClick$={() => index++}>Next message</button>
    </>
  );
});

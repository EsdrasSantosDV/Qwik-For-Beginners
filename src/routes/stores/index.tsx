import { component$, $, useStore } from "@builder.io/qwik";
import { HelloMessage } from "~/components/header-message/hello-message";

/*
Quick nos permite renderizar novamente os modelos dos componentes que
 mudam apenas quando os dados que eles
uso também mudou.
Isso significa que, em uma aplicação rápida, vamos renderizar novamente apenas as partes da página que
absolutamente necessário.
 */
export default component$(() => {
  const messages = ["Hwllo", "Welcome", "Learn ANgular"];

  //Uma loja é um espaço reservado onde os dados de um componente devem ser mantidos

  const store = useStore({
    index: 0,
  });
  //Portanto, o objeto store funciona exatamente como um objeto JavaScript simples.
  const obj={
      index:0
  }
  //ESSE OBJETO TEM O MESMO COMPORTAMENTO DO OBJETO DA STORE
  //PODEMOS ACESSAS SUAS PROPRIEDADES ATE NO TEMPLATE
  return (
    <>
      <h1>Qwik Stores:Index da Store: {store.index}</h1>

      <h3>{messages[store.index]}</h3>

      {/*Como você pode ver, você pode modificar as propriedades deste objeto de armazenamento.*/}
      <button onClick$={() => store.index++}>Next message</button>
    </>
  );
});

import { component$, $, useStore } from "@builder.io/qwik";

/*
O sistema de renderização reativa rápida possui recursos de renderização de granulação fina, portanto,
 é possível atualizar
apenas um elemento do template diretamente no DOM sem ter que chamar toda a renderização do componente função.
Como você pode ver, há um mecanismo de otimização em jogo aqui.Qwik está tentando evitar ao máximo chamar a função de renderização completa.
Se houver uma maneira de atualizar o DOM diretamente de maneira refinada, o Qwik fará isso e é
vai evitar uma renderização completa do componente.
 */
export default component$(() => {
  const messages = ["Hwllo", "Welcome", "Learn ANgular"];

  const store = useStore({
    index: 0,
  });

  /*
  Você não precisa pensar como um desenvolvedor de aplicativos sobre como o
   sistema de renderização funciona enquanto você está desenvolvendo seu aplicativo.
    A única coisa que você deve lembrar é armazenar todos os
    seus dados que o componente usa dentro do
    store e quick saberão exatamente quando renderizar novamente seu componente.
   */

  //SE VOCE VER O LOG, O OBJETO E UM OBJETO PROXY
    //E UM OBJETO PROXY, E ESXAMENTTE UM OBJETO MUTAVEL NORMAL
    //COM A FUNCIONALIDADE ADICIONAL QUE QUALQUER UM  PODE ASSINAR ALTERAÇOES NAS PROPRIEDADES DESSE PROXY

    //COM O ISSO O QWIK SABE EXATAMENTE O QUE PRECISA SER MUDADO NO COMPONENTE
  console.log(store);
  return (
    <>
      <h1>Qwik Stores:Index da Store: {store.index}</h1>

      <h3>{messages[store.index]}</h3>

      {/*  O QWIK NÃO VAI CHAMAR TODA A REDERIZAÇÃO DESSE COMPONENTE EM VARIOS CASOS*/}

      {/*  O QWIK USA UM SISTEMA DE RENDEZIAÇÃO REATIVA SOB O CAPO BASEADO EM PROXIS*/}
      <button onClick$={() => store.index++}>Next message</button>
    </>
  );
});

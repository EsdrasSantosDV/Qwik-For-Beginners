import { component$, $, useStore } from "@builder.io/qwik";

//ANTES DE EXPLICAR CONTEXT
//VOU EXPLICAR O CONCEITO DE Property Drilling




interface MessagesStore {
  messages: string[];
  index: number;
}

export default component$(() => {
  const messages = ["Hwllo", "Welcome", "Learn ANgular"];

  const store = useStore({
    messages,
    index: 0,
  });


  return (
    <>
      <h1>Qwik Stores:Index da Store: {store.index}</h1>
      {/*
      BELEZA AQUI TEMOS UMA RELAÇÃO DE PAI PRA FILHO
      MAS VAMOS PENSAR EM UMA APLICAÇÃO MUITO  MAIS COMPLEXA QUE JA VIMOS
      ONDE VOCE TEM UM ARVORE DE COMPONENTES COM MUITOS NIVEIS DE PROFUNDIDADE
      E QUE ESSSA APLICAÇÃO TENHA DADODS NORMALMENTE GLOBAIS, POR EXEMPLO
      ESTADO DE APLICAÇÃO, UM EXEMPLO CLARO E A ROLE DO USUARIO
      TODAS ESSA INFORMAÇÃO GLOBAL E UTILIZADA EM MUITOS LOCAIS DIFERENTES DA APLICAÇÃO
      NUM CASO ONDE NÃO UTILIZAMOS O CONTEXTO, TEMOS UMA PERFURAÇÃO DE PROPRIEDADE
      PQ PREICSMAOS PASSAR POR VARIOS NIVEIS DE PROFUNDIDADE PARA APENAS
      UTILIZAR EM UM RAMO FOLHA, E NESSAS PERFURAÇOES DE NIVEIS
      VARIOS NIVEIS NÃO ESTÃO USANDO ESSES DADOS
      */}
      <MessagePage store={store}></MessagePage>
      <button onClick$={() => store.index++}>Next message</button>
    </>
  );
});

interface MessageProps {
  store: MessagesStore;
}

export const MessagePage = component$((props: MessageProps) => {
    //E UM CASO TIPICO DE PERFURAÇÃO DE PROPRIEDCADE, SE NÃO TIVESSE IMPLEMENTANDO ALGO RELAICONADO
    //A STORE
    /*
    não estão usando os dados, eles estão apenas passando as propriedades
    para baixo na árvore de componentes, para
    que outro componente aninhado mais profundamente use os dados.
     */
  return (
    <>

        <MessageContainer store={props.store}></MessageContainer>
    </>
  );
});


export const MessageContainer = component$((props:MessageProps)=>{
    const { messages, index } = props.store;

    //PODEMOS AOGRA CRIAR NOSSO PRIMEIRO CONTEXTO NO PROXIMO COMMIT
    return (
        <>
            <h3>{messages[index]}</h3>
        </>
    );
})

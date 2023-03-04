import {component$, $, useStore, createContext, useContextProvider, useContext} from "@builder.io/qwik";
import {useContent} from "@builder.io/qwik-city";


interface MessagesStore {
  messages: string[];
  index: number;
}

//VAMOS CRIAR NOSSO PRIMEIRO CONTEXTO

//SEMPRE PRECISAMOS DEFINIR O TIPO DE DAOD QUE ESSE CONTEXTO VAI CONTER
//COMO AQUI ESTMAOS CRIANDO UM CONTEXTO DO TIPO MESSAGES STORE
export const MessagesContext=createContext<MessagesStore>("MESSAGES");

//NÃO PRECISA SER NO MESMO ARQUIVO VIU, IDELA E SEPARAR ISSO AQUI

export default component$(() => {
  const messages = ["Hwllo", "Welcome", "Learn ANgular"];

  const store = useStore({
    messages,
    index: 0,
  });

  //VAMOS SALVAR ESSA STORE NO CONTEXTO X
    //E SPREENCHER OS DADOS NESSE CONTEXTO NA NOSSA RAIZ DA ARVORE, MAS PODERIA SER
    //EM QUALQUER CANTO
    useContextProvider(MessagesContext,store);


  return (
    <>
      <h1>Qwik Stores:Index da Store: {store.index}</h1>

      {/*  NAO PRECISMAOS PASSAR POR REFRENCIA AS PROPRIEDADES MAIS*/}
      <MessagePage ></MessagePage>
      <button onClick$={() => store.index++}>Next message</button>
    </>
  );
});


export const MessagePage = component$(() => {





  return (
    <>

        <MessageContainer ></MessageContainer>
    </>
  );
});


export const MessageContainer = component$(()=>{

    //PODEMOS PEGAR O CONTEXTO AQUI
    const store=useContext(MessagesContext);

    //PODE VER QUE TEMOS DOIS LEVELS DE SEPARAÇÃO
    //MAS PODERIA FUNCIONAR PRA QUANTOS NVIEIS DE PRONFUDIDADE TIVERMOS



    const {messages,index}=store;


    //ISSO E UM CASO BEM SIMPLES DE USO DE CONTEXTOS
    //MAS OS CONTEXTOS SÃO OTIMOS PARA COMPARTILHAR DADOS DE FORMA GHLOALB

    //MAS PODEMOS USAR PRA CIRAR CONTEXTO LOCAIS APENAS PARA
    //UMA PEQUENA SUBARVORE DE COMPONENTES QUE SERIA TIPO UMA COMPONENTE STORE DO ANGULAR


    return (
        <>
            <h3>{messages[index]}</h3>
        </>
    );
})

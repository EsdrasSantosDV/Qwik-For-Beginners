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
  // ISSO AQUI E UMA HOOK FUNCTION PQ ELA TEM MEMORIA E TEM CONHECIMENTO
    //DO CONTEXTO ONDE ESTA RECEBENDO ESSE CHAMADO
    /*
    Portanto, use store sabe quantas vezes foi chamado para esta instância
    de componente e sabe para qual componente
    instância está sendo chamado.
     */
  const store = useStore({
    messages,
    index: 0,
  });
  //ELE PODE ALTERAR SEU COMPORAMENTO DEPENDENDO SE E A PRIMEIRA VEZ QUE E
    //CHAMADA OU POR VARIAS VEZES DEPOIS DISSO
//ESSSA FUNCOES TEM MEMORIA, TEM ESTADO E TEM CONTEXTO DE ONDE FOI CHAMADA

    //FUNCOES HOOKS TEM COMPORTAMENTOS DIFERENTES NO SERVIDOR E NO CLIENTE


    //IMPORTANTE, NUNCA COLOCAR HOOKS FUNCTIONS DENTRO DE IFS VIU
    /*
    Certifique-se de usar uma função de gancho diretamente
    dentro do corpo de sua função de renderização rápida de componente
    e não adicione a chamada à função de gancho dentro dos blocos if.
     */



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

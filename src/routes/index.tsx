import { component$,$ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/header-message/hello-message";

//TUDO ISSO E A FUNCAO DE RENDERIZAÇÃO DO QWIK

//COMO NÃO TEMOS PROPRIEDADES DE ENTRADA A ARROW FUNCTION ESTA VAZIA

//COLOCAMOS DEFAULT PQ QUEREMOS QUE AO INCIIAR ESSA APP

//ESSE COMPOENNT SEJA RENDERIZADO PRIMEIRO
export default component$(() => {
  //ESSE TIPO DE EXTENSÃO O TSX COMPILA EM JXS E COMPILA EM ELEMENTO DOM
  console.log("Initializated Hello World Component");
  //LEMBRE SEMPRE DE COLCOAR O PARENTESES

  //FUNCTION NO CLICK, VOCE PRECISA TORNAR ELA SERIALIZAVEL, tornando ELA LAZZY LOADDING
   const sayHello=$(
       ()=>{
           alert("Hello World");
       }
   )

   const onShowMessageClicked=$((message:string)=>alert(message))

  //COM O <> PERMITIMOS QUE SEJA RENDERIZADO SEM UMA DIV EXTRA
  //PERMITINDO QUE USAMOS UM UNICO NO
  return (
    <>
      {/*  COMO ESTAMOS RENDERIZADO PELA PROP ENVIADA POR INPUT BIDDING, ENVIAMOS AQUI O BOOLEANO*/}
      <HelloMessage showButton={true} message="Hello Word" courseVersion={1} onShowMessage={onShowMessageClicked} />
      <HelloMessage showButton={true} message="Teste 2"  onShowMessage={onShowMessageClicked}/>
      <HelloMessage showButton={true} message="Esdras Santos" courseVersion={3} onShowMessage={onShowMessageClicked} />
      {/*SEMPRE COLOCAR O $ PRA FALAR QUE É DO QWIK*/}
      <button onClick$={sayHello}>Say Hello</button>
    </>
  );
});

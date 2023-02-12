import { component$ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/header-message/hello-message";

//TUDO ISSO E A FUNCAO DE RENDERIZAÇÃO DO QWIK

//COMO NÃO TEMOS PROPRIEDADES DE ENTRADA A ARROW FUNCTION ESTA VAZIA

//COLOCAMOS DEFAULT PQ QUEREMOS QUE AO INCIIAR ESSA APP

//ESSE COMPOENNT SEJA RENDERIZADO PRIMEIRO
export default component$(() => {
  //ESSE TIPO DE EXTENSÃO O TSX COMPILA EM JXS E COMPILA EM ELEMENTO DOM
  console.log("Initializated Hello World Component");

  //LEMBRE SEMPRE DE COLCOAR O PARENTESES

   //COM O <> PERMITIMOS QUE SEJA RENDERIZADO SEM UMA DIV EXTRA
   //PERMITINDO QUE USAMOS UM UNICO NO
  return (
    <>
      <HelloMessage message="Hello Word" courseVersion={1}/>
      <HelloMessage message="Teste 2" />
      <HelloMessage  message="Esdras Santos" courseVersion={3}/>
    </>
  );
});

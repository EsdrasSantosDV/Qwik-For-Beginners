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

   const messages=[
       "Hwllo",
       "Welcome",
       "Learn ANgular"
   ]


   const onShowMessageClicked=$((message:string)=>alert(message))

  //COM O <> PERMITIMOS QUE SEJA RENDERIZADO SEM UMA DIV EXTRA
  //PERMITINDO QUE USAMOS UM UNICO NO
  return (
    <>
        {/*ISSSO AQUI SERA BASICMAENTE UM NG FOR*/}
        {
            // PRECISAMOS COLOCAR O INDEX, COMO NÃP TEMOS NADA PRA RAASTREAR NESSE ARRAY, PRECISAMOS CRIAR UM ATRIBUTO CHAVE
            //AGORA SE TIVERMSO PRO EXEMPLO UMA ARRAY DE COURSES QUE TEM COMO CHAVE O ID, COLOCAMOS DIRETAMENTO NO KEY
            //PRECISAMOS DE UMA CHAVE PERSONALIZADA, DADO QUE TEMOS VARIOS IRMASO JSONS DENTRO DA MESMA CHAVE, QUANDO NÃO TEMOS UMA CHAVE PERSOANLIDADE
            messages.map((message,index)=>(
                <HelloMessage key={index} message={message}  courseVersion={index} showButton={true} onShowMessage={onShowMessageClicked}></HelloMessage>
            ))
        }

      <button onClick$={sayHello}>Say Hello</button>
    </>
  );
});

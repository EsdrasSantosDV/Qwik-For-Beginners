import {component$} from "@builder.io/qwik";


//TUDO ISSO E A FUNCAO DE RENDERIZAÇÃO DO QWIK

//COMO NÃO TEMOS PROPRIEDADES DE ENTRADA A ARROW FUNCTION ESTA VAZIA

//COLOCAMOS DEFAULT PQ QUEREMOS QUE AO INCIIAR ESSA APP

//ESSE COMPOENNT SEJA RENDERIZADO PRIMEIRO
export default component$(()=>{


    //ESSE TIPO DE EXTENSÃO O TSX COMPILA EM JXS E COMPILA EM ELEMENTO DOM
    console.log("Initializated Hello World Component");

    //LEMBRE SEMPRE DE COLCOAR O PARENTESES
    return(
        <h1>
            Welcome to this Qwik!
        </h1>
    )


})

import {component$} from "@builder.io/qwik";


//UMA BOA PRATICA E COLOCAR UMA INTERFACE PROPS
interface HelloMessageProps{
    message:string,
    //SE EU COLOCAR COMO OPCIONAL NA HORA DE FAZER O INPUT PROPERTY
    //ELA FICA OPCIONAL TAMBEM
    courseVersion?:number
}

//E COLOCAR UM GENERIC PRA ESSE COMPONENT
//COLOCANDO AS PROPS DE ENTRADA, E O MECANISMO DE INFERENCIA
//JA RESOLVE TUDO

//PODEMOS FAZER SEM GENERIC EXPLICITAMENTE
export const HelloMessage=component$((props:HelloMessageProps)=>{

    const{message,courseVersion}=props;

    return (
        <div class='container'>
            {
                <h1>
                    {message} - {courseVersion}
                </h1>
            }
        </div>

    )

})

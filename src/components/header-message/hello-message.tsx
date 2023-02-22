import {component$, PropFunction} from "@builder.io/qwik";


//UMA BOA PRATICA E COLOCAR UMA INTERFACE PROPS
interface HelloMessageProps{
    message:string,
    //SE EU COLOCAR COMO OPCIONAL NA HORA DE FAZER O INPUT PROPERTY
    //ELA FICA OPCIONAL TAMBEM
    courseVersion?:number
    showButton:boolean;
    //RECEBENDO UMA FUNCAO COMO PARAMETRO
    onShowMessage:PropFunction<(message:string)=>void> ;
}

//E COLOCAR UM GENERIC PRA ESSE COMPONENT
//COLOCANDO AS PROPS DE ENTRADA, E O MECANISMO DE INFERENCIA
//JA RESOLVE TUDO

//PODEMOS FAZER SEM GENERIC EXPLICITAMENTE
export const HelloMessage=component$((props:HelloMessageProps)=>{

    const{message,courseVersion,onShowMessage,showButton}=props;

    return (
        <div class='container'>
            {
                <>
                    <h1>
                        {message} - {courseVersion}
                    </h1>
                    {/*PRA FAZEMOS UM CONDICIONAL IGUAL O NG IF DO ANGULAR*/}
                    {
                        //USAMOS UMA CONDICAO E SE ELA FOR ACEITA, RENDERIZAMOS NOSSO NÓ
                        //DADO QUE A PARTE DO NÓ JSX E TRUE, SO PRECISAMOS DA PARTE DO SHOW
                        //COMO TRUE
                        showButton && (
                           <button onClick$={()=>onShowMessage(message)}>Show Message</button>
                        )
                    }

                </>

            }
        </div>

    )

})

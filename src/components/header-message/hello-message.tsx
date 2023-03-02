import {component$, PropFunction, useStyles$, useStylesScoped$} from "@builder.io/qwik";
import styles from './hello-message.css?inline'
/*
E vamos adicionar aqui um parâmetro que estamos passando para o runtime que está realizando o import,
informando ao tempo de execução que isso deve ser importado como texto simples e associado aqui a esta importação de estilos
variável.
Agora podemos usar os estilos como texto e aplicá-los aqui ao componente usando o uso da API de estilos de uso
 */

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


    //TEMOS O USE STYLES SCOPED QUE DAMOS O CONTEXTO LOCAL PRA ESSE COMPOENNTE, PRA ELE NÃO SER AFETADO POR OUTROS, SOMENTE O ESCOPO QUE DEI A ELE
    useStylesScoped$(styles);

    const{message,courseVersion,onShowMessage,showButton}=props;

    return (
        <div class='container'>
            {
                <>

                    {/*PRA FAZEMOS UM CONDICIONAL IGUAL O NG IF DO ANGULAR*/}
                    <div class='hello-message'>    {message} - {courseVersion}</div>

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

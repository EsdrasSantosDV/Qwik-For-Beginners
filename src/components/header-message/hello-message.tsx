import {
  component$,
  PropFunction,
  useStyles$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./hello-message.css?inline";
/*
E vamos adicionar aqui um parâmetro que estamos passando para o runtime que está realizando o import,
informando ao tempo de execução que isso deve ser importado como texto simples e associado aqui a esta importação de estilos
variável.
Agora podemos usar os estilos como texto e aplicá-los aqui ao componente usando o uso da API de estilos de uso
 */

//UMA BOA PRATICA E COLOCAR UMA INTERFACE PROPS
interface HelloMessageProps {
  message: string;
  //SE EU COLOCAR COMO OPCIONAL NA HORA DE FAZER O INPUT PROPERTY
  //ELA FICA OPCIONAL TAMBEM
  courseVersion?: number;
  showButton: boolean;
  //RECEBENDO UMA FUNCAO COMO PARAMETRO
  onShowMessage: PropFunction<(message: string) => void>;
}

//E COLOCAR UM GENERIC PRA ESSE COMPONENT
//COLOCANDO AS PROPS DE ENTRADA, E O MECANISMO DE INFERENCIA
//JA RESOLVE TUDO

//PODEMOS FAZER SEM GENERIC EXPLICITAMENTE

//SE  O COMPONENTE USA PROPS DE ENTRADA
//COMO AQUI, A GENTE NÃO PRECISA ADICIONAR ADERECECOS DE COMPONENTES DENTRO DA LOJA PARA
//RASTREA-LOS
//OS OBJETOS DESSAS PROPRIEDADES TAMBEM SÃO PROXIES, E O QUIK VAI SE INSCREVER
//NESSAS ALTERAÇOES NESSES PROXIES E ATUALIZARA O TEMPLATE AUTOMATICAMENTE
//IGUAL A GENTE FAZ COM AS STORES

export const HelloMessage = component$((props: HelloMessageProps) => {
  //PENSA NAS PROPS COMO UM ARMAZENAMENTO IMPLICITO QUE FUNCIONA DO MESMO JEITO
  //QUE SE TIVESSE UTILLIZANDO A API DE USE STORE
  //QWIK USA PROXIES PRA TODO O LADO

  //A GENTE TEM O MELHOR DOS DOIS MUNDOS
  //TEMOS A SIMPLICIDADE DE TRANSFORMAR JAVASCRIPT COMO OBJETOS COMBINADOS
  //COM RENDEREIZAÇÃO DE EXAMENTE O QUE NECESSITA SER ATUALIZADO

  //TEMOS O USE STYLES SCOPED QUE DAMOS O CONTEXTO LOCAL PRA ESSE COMPOENNTE, PRA ELE NÃO SER AFETADO POR OUTROS, SOMENTE O ESCOPO QUE DEI A ELE
 //ISSO AQUI TAMBEM E UMA HOOK FUNCTION
  //PQ OS ESTILOS SÃO ADICONADOS NA PRIMEIRA VEZ QUE ESSE COMPOENNETE FOI RENDERIZADO//
  //E NA SEGUNDA VEZ ELA NÃO VAI SER CHAMADA
  useStylesScoped$(styles);
  //ESSAS FUNCOES SÃO MUITO DIFERENTES DAS FUNCOES PURAS QUE A GENTE USA
  //FUNCAO PURA E BASICAMENTE UMA FUUNCAO QUE PRA DADO UMA ENTRADA ESPECIFICA
  //ELA RETORNA SEMPRE A MESMA SAIDA, E NÃO TEM EFEITOS COLATERIAZS
  const { message, courseVersion, onShowMessage, showButton } = props;

  const cssClasses = ["hello-message"];

  //PODEMOS ADICIONAR ESTILOS CORRESPONDENTE A UMA DETERMINADA COONDICAO
  if (courseVersion == 1) {
    //PODEMOS ADCIIONAR UM . NA CASSE
    //.hello-message.highlighted {
    //     color: orange;
    // }
    //IGUAL ACIMA
    cssClasses.push("highlighted");
  }

  const customStyles =
    courseVersion == 2
      ? {
          color: "red",
          "text-decoration": "underline",
        }
      : {};

  return (
    <div class="container">
      {
        <>
          {/*TEMOS TBM O NG STYLES, DADO UMA CONDIÇÃO ADICONAR, OU TIRAR UM ESTILO*/}
          <div class={cssClasses} style={customStyles}>
            {message}: version {courseVersion}
          </div>

          {
            //USAMOS UMA CONDICAO E SE ELA FOR ACEITA, RENDERIZAMOS NOSSO NÓ
            //DADO QUE A PARTE DO NÓ JSX E TRUE, SO PRECISAMOS DA PARTE DO SHOW
            //COMO TRUE
            showButton && (
              <button onClick$={() => onShowMessage(message)}>
                Show Message
              </button>
            )
          }
        </>
      }
    </div>
  );
});

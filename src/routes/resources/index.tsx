import {
  component$,
  useResource$,
  Resource,
  $,
  useStore,
} from "@builder.io/qwik";
import { Course } from "~/models/course";

interface CoursesStore {
  courses: Course[];
}
export default component$(() => {
  //OS DAODS VAO SER CARREGADOS NO SERVIDOR NA PRIMEIRA VEZ
  //QUE O COMPONENTE FOR RENDERIZADO E AI SIM
  //OS DADOS VAÃO SER EXBIDISO USANDO  O RESOURCE

  //PRECISAMOS USAR UM GENERIC PARAMETER DO TIPO QUE
  //QUEREMOS RECBER DO BACKEND QUE AQUI SERIA UMA LISTA DE COURSOS
  const resource = useResource$<Course[]>(async () => {
    //ESSE RESOURCE VAI RETORNAR UMA LISTA DE CURSOS DO BACK
    return getCourses();
  });
  //EM SEGUIDA O APLICATIVO SERA RETOMADO NO LADO DO CLIENTE
  //aqui temos OS VALORES DO RESOURCE
  // E UM FLAG SE O RECURSO ESTA AINDA CARREGANDO OU NÃO

  //LEMRBA QUE O RESOURCE E UM HOOK, ELA TEM MEMORIA
  //TEM COMPORTAMENTO E TEM O CONTEXTO DE ONDE E CHAMADO

  /*
    Por outro lado, se esse componente for carregado lentamente no front-end, o recurso do usuário será
    saber que quando o componente é inicializado no front-end, ele não precisa chamar o comando get
    Os dados já foram carregados na renderização inicial que recebemos do servidor, então a função
    conhece o contexto em que está sendo usado e se comportará de maneira diferente nas chamadas para o
    função de renderização de componentes.
     */

  return (
    <>

      {/*  SE OLHARMOS NAS REQUISICOES AJAX NÃO VEREMOS NENHUMA REQUISIÇÃO LA, PQ TUDO FOI JA PUXADO NO SERVIDOR DO FRONT*/}

      {resource.value.then((courses) =>
        courses.map((course) => <h3>{course.description}</h3>)
      )}
    </>
  );
});

export async function getCourses() {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
}

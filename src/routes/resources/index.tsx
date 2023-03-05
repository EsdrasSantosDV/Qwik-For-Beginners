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
  const resource = useResource$<Course[]>(async () => {
    return getCourses();
  });

  return (
    <>
      {/*    O QWIK TEM UM COMPONENTE QUE AJUDA A GENTE DEMAIS COM O RESOURCES*/}
      {/* APRIMEIRA PROPS E O PROPRIO RESOURCE A SER UTILZIADO  */}
      {/*  TEMSO EM SEGUIDA UMA FUNCAO DE MANIPULAÇÃO DOS EVENTOS NÃO RESOLVIDOS QUE VAI SER ACIONADA*/}
      {/*    SEMPRE QUE OS DADSO FOREM RESOLVIDOS COM SUCESSO*/}
      {/*    O ONRESOLVED VAI SER CHAMADO QUANDO RECEBEMOS OS DADOS*/}

      {/*TEMSO TAMBEM O CASO ENQUANTO A TELA NÃO CARREGOU AINDA COM OS DADOS*/}
      {/*E QUANDO A REQUISÃO FALHOU*/}
      <Resource
        value={resource}
        onPending={()=>(
            <h1>Loading</h1>
        )}
        onRejected={()=>(
            <h1>Request Failed</h1>
        )}
        onResolved={(courses) => (
          <>
            {courses.map((course) => (
              <h3>{course.description}</h3>
            ))}
          </>
        )}
      />
    </>
  );
});

export async function getCourses() {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
}

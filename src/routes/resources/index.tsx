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
  const store = useStore({
    reloadCounter: 0,
  });
  const resource = useResource$<Course[]>( (ctx) => {
    //TEMOS UM CONTEXTO E PASSAMOS UMA UFNCAOI DE RATREAMENTO DE RECURSO PRO USAURI
      //ENTÃO O QWIK SABE QUANDO ESSSA FUNCAO HTTP PRECISA SER CHAMADA NOVMAENTE
    //ISSO AQUI VAI SER LA NO LADO DO CLIENTE AGORA
    ctx.track(() => store.reloadCounter);
    return getCourses();
  });

  return (
    <>
       <button onClick$={()=>store.reloadCounter++}>Reload Courses</button>
      <Resource
        value={resource}
        onPending={() => <h1>Loading</h1>}
        onRejected={() => <h1>Request Failed</h1>}
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

import {component$} from "@builder.io/qwik";


export const HelloMessage=component$(()=>{

    const message="WELCOME TO THE QWIK COURSE"

    return (
        <div class='container'>
            {
                <h1>
                    {message}
                </h1>
            }
        </div>

    )

})

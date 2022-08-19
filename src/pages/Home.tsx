import React, { useState } from "react"
import { MyComponent } from "../../lib/index"

type HomeProps = {
  name: string,
  tech: string[],
}

function Home() {
  const [counter, setCounter] = useState<number>(0)

  const props: HomeProps = {
    name: "<manutepowa />",
    tech: ["Vite 3", "React", "Tailwind", "TypeScript", "Eslint", "Prettier"],
  }
  const name = "<manutepowa />"

  return (
    <div className="h-screen bg-gray-100 flex flex-col place-content-center items-center">
      <MyComponent imageUrl="https://i.picsum.photos/id/439/200/300.jpg?hmac=-995cverChuR_nKZFItxOP38htc5deVMd6ZrKiME55g" />
      <h2 className="text-sky-900 text-center text-xl">Boilerplate:</h2>
      <div>
        {props.tech.map((tech, index) => (
          <span key={tech}>
            {tech}
            {index < props.tech.length - 1 ? " - " : ""}
          </span>
        ))}
      </div>
      <div className="flex flex-col mb-4 mt-4 border-2 p-4 border-slate-200 rounded-lg">
        <div>counter: {counter}</div>
        <button onClick={() => setCounter((prev) => prev + 1)}>👆</button>
      </div>

      <p className="text-sky-900 font-extralight">By {name}</p>
    </div>
  )
}

export default React.memo(Home)

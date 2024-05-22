import { useState } from "react"


function App() {
  const [color,setColor] = useState("yellow")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl ">
          <button onClick={()=> setColor("red")} className=" font-mono outline-none px-4 bg-red-600 py-1 rounded-full text-white shadow-lg">
            Red
          </button>
          <button onClick={()=> setColor("green")} className="font-mono outline-none px-4 bg-green-600 py-1 rounded-full text-white shadow-lg">
            Green
          </button>
          <button onClick={()=> setColor("blue")} className="font-mono outline-none px-4 bg-blue-600 py-1 rounded-full text-white shadow-lg">
            Blue
          </button>
          <button onClick={()=> setColor("yellow")} className="font-mono outline-none px-4 bg-yellow-500 py-1 rounded-full text-white shadow-lg">
            Yellow
          </button>
          <button onClick={()=> setColor("grey")} className="font-mono outline-none px-4 bg-gray-600 py-1 rounded-full text-white shadow-lg">
            Grey
          </button>
          <button onClick={()=> setColor("pink")} className="font-mono outline-none px-4 bg-pink-600 py-1 rounded-full text-white shadow-lg">
            Pink
          </button>
          <button onClick={()=> setColor("purple")} className="font-mono outline-none px-4 bg-purple-600 py-1 rounded-full text-white shadow-lg">
            Purple
          </button>
          <button onClick={()=> setColor("orange")} className="font-mono outline-none px-4 bg-orange-600 py-1 rounded-full text-white shadow-lg">
            Orange
          </button>
          <button onClick={()=> setColor("olive")} className="font-mono outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>
            Olive
          </button>
          <button onClick={()=> setColor("white")} className="font-mono outline-none px-4 bg-gray-000 py-1 rounded-full text-black shadow-lg">
            White
          </button>
          <button onClick={()=> setColor("black")} className="font-mono outline-none px-4 bg-black py-1 rounded-full text-white shadow-lg">
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

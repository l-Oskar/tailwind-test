import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-svh grid grid-cols-12 grid-rows-12">
        <div className="h-auto col-span-12 row-span-1 bg-gradient-to-r from-indigo-700 to-purple-900 flex items-center justify-center">
          1
        </div>
        <div className="h-auto col-span-2 row-span-11 bg-cyan-800 border-1 border-gray-300 grid">
          <ul className="grid gap-1">
            <li className="h-20 p-4">Dashboard</li>
          </ul>
        </div>
        <div className="h-auto col-span-10 row-span-11 bg-cyan-700 border-1 border-gray-300 flex items-center justify-center">
          3
        </div>
      </div>
    </>
  );
}

export default App;

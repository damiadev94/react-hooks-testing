import { useState } from "react";

export default function MessageCard() {
  const [message, setMessage] = useState("Actualizame!");

  return (
    <div className="py-4 px-8 rounded-md bg-gray-200 max-w-sm">
      <h2 className="text-2xl font-bold mb-12">Editor de Mensaje</h2>
      <div className="flex flex-col gap-8 mb-8">
        <input
          className="w-full rounded-md border-2 border-gray-200 px-4 py-4 focus:outline outline-4 outline-gray-200 transition-all"
          type="text"
          placeholder="Escribe algo"
          onChange={(e) =>
            e.target.value === ""
              ? setMessage("Actualizame!")
              : setMessage(e.target.value)
          }
        />
        <span className="text-4 px-8 py-4 rounded-md bg-gray-100">
          {message}
        </span>
      </div>
    </div>
  );
}

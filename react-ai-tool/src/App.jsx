import { useState } from "react";
import { URL } from "./constants";

function App() {
  const [question, setQuestion] = useState("");

  const payload = {
    contents: [
      {
        parts: [
          {
            text: "Explain how AI works in a few words",
          },
        ],
      },
    ],
  };

  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body:JSON.stringify(payload)
    });

    response = await response.json();
  
    console.log(response);

  };

  return (
    // full screen
    <div className="grid grid-cols-5 h-screen text-center">
      {/*  left part of ai tool */}
      <div className="col-span-1 bg-zinc-800"></div>

      {/* Right part  */}
      <div className="col-span-4 p-10">
        <div className="container h-110"></div>
        <div className="bg-zinc-800 w-1/2 text-white m-auto rounded-2xl border border-zinc-400 flex h-16 ">
          <input
            type="text"
            placeholder="Ask me anything"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className="w-full h-full p-3 outline-none"
          />
          <button onClick={askQuestion}>Ask</button>
        </div>
      </div>
    </div>
  );
}

export default App;

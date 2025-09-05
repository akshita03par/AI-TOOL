import { useState } from "react";
import { URL } from "./constants";
import "./App.css";
import Answer from "./components/Answers";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);

  const payload = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;

    // Split by new line, remove empty lines
   dataString = dataString
  .split("\n")
  .map(item => item.trim())
  .filter(item => item !== "");

    setResult(dataString);
  };

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1 bg-zinc-800"></div>

      <div className="col-span-4 p-10">
        <div className="container h-[28rem] overflow-auto hide-scrollbar">
          <div className="text-zinc-300">
            <ul>
              {result.map((item, index) => (
                <li key={index} className="text-left p-1">
                  <Answer ans={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-zinc-800 w-1/2 text-white m-auto rounded-2xl border border-zinc-400 flex h-16">
          <input
            type="text"
            placeholder="Ask me anything"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-full p-3 outline-none"
          />
          <button onClick={askQuestion} className="p-2">
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

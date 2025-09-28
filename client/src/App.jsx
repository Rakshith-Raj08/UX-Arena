import { useEffect, useState } from "react";

function App() {
  // define state here 👇
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/prompts")
      .then((res) => res.json())
      .then((data) => setPrompts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">UX Arena Prompts</h1>
      <ul className="mt-4">
        {prompts.map((prompt) => (
          <li key={prompt.id} className="border p-2 rounded mb-2">
            <strong>{prompt.title}</strong> – {prompt.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onLanding = async () => {
    const res = await axios.get("./api/todos");
    setTodoList(res.data);
  };

  useEffect(() => {
    onLanding();
  }, []);
  return (
    <div className="App">
      <button
        onClick={async () => {
          const res = await axios.get("./api/hello");
          setText(res.data);
        }}
      >
        Call hello
      </button>
      {text}
      <div>
        <div>
          <input
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const res = await axios.post("./api/todos", { text: todo });
              setTodo("");
            }}
          >
            add
          </button>
        </div>
        {todoList.map((t) => (
          <div key={t._id}>{t.text}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

//this component displays a single lesson dynamically based on lesson id present in URL.
import { useParams } from "react-router-dom"; // helps read URL
import { useState } from "react"; //for suggestion and input
import { modules } from "../data/dummyData"; //dummy data

function Lesson() {
  const { id } = useParams();

  const lesson = modules
    .flatmap((m) => m.lessons)
    .find((l) => l.id === Number(id));

  const [suggestions, setSuggestions] = useState([]); //array of user suggestions
  const [input, setInput] = useState(); //cuurent input

  if (!lesson) return <h2>Lesson not found</h2>;

  function addSuggestion() {
    if (input.trim() === "") return; //prevent empty suggestion
    setSuggestions([...suggestions, input]); //keep older and add new at end
    setInput(""); //clear input box after adding
  }

  return (
    <div style={{ passing: "20px" }}>
      <h2>{lesson.title}</h2>
      <p>{lesson.description}</p>

      <h4>videos</h4>
      {lesson.videos.map((video, index) => (
        <p key={index}>
          <a href={video} target="_blank">
            Watch Video:{index + 1}
          </a>
        </p>
      ))}
      <hr />
      <h3>Suggestions/Doubts</h3>
      <input
        type="text"
        placeholder="Write your suggestions or doubt?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSuggestion}>Add</button>
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
export default Lesson;

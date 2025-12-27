//this component displays a single lesson dynamically based on lesson id present in URL.
import { useParams } from "react-router-dom"; // helps read URL
import { modules } from "../data/dummyData";

function Lesson() {
  const { id } = useParams();

  const lesson = modules
    .flatmap((m) => m.lessons)
    .find((l) => l.id === Number(id));
  if (!lesson) return <h2>Lesson not found</h2>;

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
    </div>
  );
}
export default Lesson;

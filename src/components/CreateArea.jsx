import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [topic, setTopic] = useState({
    title: "",
    content: "",
  });

  function getTitle(event) {
    const { name, value } = event.target;
    setTopic((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(topic);
  }

  function submitNote(e) {
    e.preventDefault();

      if (topic.title.trim() === "" || topic.content.trim() === "") {
        alert("Please fill in both Title and Note!");
        return; // Stop the function from adding the note
      }
      
    props.addNote(topic);
    setTopic({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={getTitle}
          name="title"
          placeholder="Title"
          value={topic.title}
        />
        <textarea
          onChange={getTitle}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={topic.content}
        />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [showNote, setShowNote] = useState([]);

  function keepNote(newTopic) {
    setShowNote((prevNote) => [...prevNote, { ...newTopic, id: Date.now() }]);
    console.log(showNote);
  }

  function deleteNote(id) {
    setShowNote((prev) => prev.filter((note) => note.id !== id));
  }
  return (
    <div className="app">
      <div className="background">
      <div className="content">
      <Header />
      <CreateArea addNote={keepNote} />
      {showNote.map((noteItems) => (
        <Note
          key={noteItems.id}
          id={noteItems.id}
          title={noteItems.title}
          content={noteItems.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
    </div>
    </div>
  );
}

export default App;

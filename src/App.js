import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const handleClearText = () => {
    setText('');
  };

  return (
    <div className="App">
      <h2><u>Responsive Paragraph Word Counter</u></h2>
      <textarea id = "text-box"
        placeholder="Type here..."
        rows="15"
        cols="70"
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {countWords(text)}</p>

      <button id = "clr" onClick={handleClearText}>Clear All</button>

    </div>
  );
}

export default App;

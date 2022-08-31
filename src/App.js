import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "winking",
  "😀": "grinning",
  "🤔": "thinking",
  "🤤": "drooling",
  "😳": "flushed",
  "😕": "confused",
  "🥵": "hot",
  "🤪": "zany face",
  "🤫": "shushing face",
  "😪": "sleepy",
  "🙄": "rolling eyes",
  "🤮": "vomiting",
  "🥶": "cold face",
  "🤥": "Lying",
  "🤐": "zipper-mouth face",
  "🤓": "nerd face",
  "🥴": "woozy face",
  "😠": "angry face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have that emoji";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3>emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

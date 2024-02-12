import React, { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [sadImages, setSadImages] = useState([
    "https://i.pinimg.com/originals/47/84/08/478408e9bd7af7e8d7d7c14c8e206171.gif",
    "https://i.pinimg.com/originals/0b/2b/32/0b2b329c67556acd4139c0a76aec55a7.gif",
    "https://i.pinimg.com/originals/ad/6b/8a/ad6b8a468616a489fcd0de2a6921df11.gif",
    "https://i.pinimg.com/originals/89/b2/e5/89b2e52c67b2793082a8dd96871fd310.gif",
    "https://i.pinimg.com/originals/06/97/bc/0697bc2795e2de259928ad5c47f3ff4f.gif",
    "https://i.pinimg.com/originals/45/49/6f/45496f603e84ea726ec37d4b22b46082.gif",
    "https://i.pinimg.com/originals/e3/f9/ed/e3f9edf0f541236b4e54b8b913ca0120.gif",
    "https://i.pinimg.com/originals/46/5f/85/465f85a75046bc46cb9c879381173714.gif",
    "https://i.pinimg.com/originals/11/04/37/1104379b1e268b3ea1bcb29b87cc3064.gif",
    "https://i.pinimg.com/originals/a5/81/4b/a5814b859c6f730c13bceda4d231e9fd.gif",
    "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif",
  ]);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);

    const isNegativePhrase = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ].includes(getNoButtonText());

    if (isNegativePhrase) {
      setImageIndex((prevIndex) => (prevIndex + 1) % sadImages.length);
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="main">
      <div className="cont">
        {yesPressed ? (
          <>
            <img
              src="https://i.pinimg.com/originals/a9/1a/75/a91a75f39020e10c8a8c195bf837c75a.gif"
              alt="Bear kisses"
              style={{ width: "300px", height: "300px" }}
            />
            <h1>WOOOOOOW!!! I love you sweeeety!! ;))</h1>
          </>
        ) : (
          <>
            <img
              src={
                noCount === 0
                  ? "https://i.pinimg.com/originals/ff/4c/11/ff4c110836358f3027984c5d3d318ba9.gif"
                  : sadImages[imageIndex]
              }
              alt="Love bear"
              style={{ width: "300px", height: "300px" }}
            />
            <h1 style={{ paddingLeft: "2rem" }}>Will you be my Valentine?</h1>
            <div className="buttons">
              <div className="button">
                <button
                  className="yes"
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button className="no" onClick={handleNoClick}>
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

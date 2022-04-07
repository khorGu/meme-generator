import "./Meme.css";

import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/28j0te.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevData) => ({
      ...prevData,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }

    getMemes();
  }, []);

  console.log(allMemes);

  return (
    <main>
      <div action="" className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a New Meme Image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme image" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;

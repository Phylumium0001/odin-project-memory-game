import { useState } from "react";
import "../styles/cards.css";

export default function Cards({ score, setScore, highScore, setHighScore }) {
  const initialState = [
    {
      name: "Naruto",
      link: "https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png",
      counter: 0,
    },
    {
      name: "Itachi",
      link: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png",
      counter: 0,
    },
    {
      name: "Shisui",
      link: "https://static.wikia.nocookie.net/naruto/images/4/4c/Shisui_Uchiha.png",
      counter: 0,
    },
    {
      name: "Madara",
      link: "https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png",
      counter: 0,
    },
    {
      name: "Hashirama",
      link: "https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png",
      counter: 0,
    },
    {
      name: "Minato",
      link: "https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png",
      counter: 0,
    },
    {
      name: "Darui",
      link: "https://static.wikia.nocookie.net/naruto/images/9/9e/Darui_Part_III.png",
      counter: 0,
    },
    {
      name: "Nagato",
      link: "https://static.wikia.nocookie.net/naruto/images/4/46/Nagato.png",
      counter: 0,
    },
    {
      name: "Gamatatsu",
      link: "https://static.wikia.nocookie.net/naruto/images/8/81/Gamatatsu.png",
      counter: 0,
    },
    {
      name: "Shikamaru",
      link: "https://static.wikia.nocookie.net/naruto/images/9/9a/Shikamaru_Nara.png",
      counter: 0,
    },
    {
      name: "Kakashi",
      link: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png",
      counter: 0,
    },
    {
      name: "Hidan",
      link: "https://static.wikia.nocookie.net/naruto/images/e/e3/Hidan.png",
      counter: 0,
    },
  ];

  const [cardObj, setCardObj] = useState(initialState);

  function roundEnded() {
    setCardObj(initialState);
    setHighScore(score > highScore ? score : highScore);
    setScore(0);
  }

  function shuffleCards() {
    setCardObj((prevCardObj) => {
      const array = [...prevCardObj];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    });
  }

  function handleCardClick(name) {
    const card = cardObj.find((obj) => obj.name === name);

    if (card.counter < 1) {
      setCardObj(
        cardObj.map((element) =>
          element.name === name
            ? { ...element, counter: element.counter + 1 }
            : element,
        ),
      );
      // Shuffle the cards
      shuffleCards();

      // Change the score
      setScore(score + 1);
    } else {
      roundEnded();
    }
    console.log(cardObj);
  }

  return (
    <>
      <div className="cards">
        {cardObj.map((element) => (
          <div
            className="card"
            key={element.name}
            onClick={() => handleCardClick(element.name)}
          >
            <img src={element.link} alt={element.name} />
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

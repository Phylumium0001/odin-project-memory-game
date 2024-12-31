import { useState } from 'react'
import '../styles/cards.css'
export default function Cards({ images }) {
  const initialState = [
    {name:'Naruto',link :"https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png",counter:0},
    {name:'Itachi',link :'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png',counter:0},
    {name:'Shisui',link :'https://static.wikia.nocookie.net/naruto/images/4/4c/Shisui_Uchiha.png',counter:0},
    {name:'Madara',link :'https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png',counter:0},
    {name:'Hashirama',link :'https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png',counter:0},
    {name:'Minato',link :'https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png',counter:0},
    {name:'Darui',link :'https://static.wikia.nocookie.net/naruto/images/9/9e/Darui_Part_III.png',counter:0},
    {name:'Nagato',link :'https://static.wikia.nocookie.net/naruto/images/4/46/Nagato.png',counter:0},
    {name:'Gamatatsu',link :'https://static.wikia.nocookie.net/naruto/images/8/81/Gamatatsu.png',counter:0},
    {name:'Shikamaru',link :'https://static.wikia.nocookie.net/naruto/images/9/9a/Shikamaru_Nara.png',counter:0},
    {name:'Kakashi',link :'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png',counter:0},
    {name:'Hidan',link :'https://static.wikia.nocookie.net/naruto/images/e/e3/Hidan.png',counter:0}

  ]
  const [cardObj, setCardObj] = useState(initialState)

  function roundEnded() {
    // Reset src
    setCardObj(initialState)
  }

  function handleCardClick(name) {
    // Check if the click should be permitted
    // Takes the name of the clicked card.
    // Else, end game

    // Select it from the src list
    const card = cardObj.filter(element=>element.name === name)[0]
    console.log(name)
    
    // Check if adding is possible
    
    if (card.counter == 0 ){
      // Incrementing the counter
      setCardObj(cardObj.map(
        (element)=>{
          element.name === name ? {...element,counter:element.counter+1} : element
        }
      ))
    }else{
      roundEnded()
    }console.log(card)
    
  }
  return<>
    <div className='cards'>
      {cardObj.map((element,index)=>{
        // console.log(element)
        return <div className="card" key={element.name} onClick={(element)=>(handleCardClick(element.name))}>
          <img src={element.link} alt={element.name} />
          <p>{element.name}</p>
        </div>
      })}
      {/* <div className="card">card1</div>
      <div className="card">card2</div>
      <div className="card">card3</div>
      <div className="card">card4</div>
      <div className="card">card5</div>
      <div className="card">card6</div>
      <div className="card">card7</div>
      <div className="card">card8</div>
      <div className="card">card9</div>
      <div className="card">card10</div>
      <div className="card">card11</div>
      <div className="card">card12</div> */}
    </div>
  </>
}

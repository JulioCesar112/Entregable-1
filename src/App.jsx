import { useState } from "react";
import "./App.css";
import colors from "./utils/colors";
import author from "./json/quotes.json"
import QuoteBox from "./components/QuoteBox"
import Author from "./components/Author";
import Botton from "./components/Botton";

function App() {
  const getRandomElement = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  }

  let authorRandom = getRandomElement(author)
  let colorRandom = getRandomElement(colors)

  const [randomAuthor, setRandoAuthor] = useState(authorRandom);
  const [randomColors, setRandomColors ] = useState(colorRandom)

  const obStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    authorRandom = getRandomElement(author)
    colorRandom = getRandomElement(colors)

    setRandoAuthor(authorRandom)
    setRandomColors(colorRandom)
  }

  return (
    <div className="App" style={obStyle}>
      <div className="card">
        <QuoteBox 
          randomAuthor={randomAuthor} 
          randomColors={randomColors}
          getRandomAll={getRandomAll}
        /> 
        <Author
         randomAuthor={randomAuthor} 
         randomColors={randomColors}
         />
        <Botton
        randomColors={randomColors}
        getRandomAll={getRandomAll} 
        />
      </div>
    </div>
  )
}

export default App;

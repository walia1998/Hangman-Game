import { Link } from "react-router-dom"
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButton/LetterButton";
import { useState } from "react";

function PlayGame() {
    
    const [usedLetters, setUsedLetters] = useState([]);

    const handleLetterClick = function(letter) {
        setUsedLetters([...usedLetters, letter])
    }
    const text = "HUMBLE";
    //const usedLetters = ['B', 'E']

    return (

        <div>
            <h1> Play Game</h1>
            <MaskedText text={text} usedLetters={usedLetters} />
            <hr />
            <LetterButtons text={text} usedLetters={usedLetters} onLetterClick={handleLetterClick}/>


            <hr />


            <Link to="/start" className="text-blue-600 underline hover:text-blue-800">Start Game</Link>
        </div>
    )
}

export default PlayGame;
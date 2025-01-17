import { Link } from "react-router-dom"
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButton/LetterButton";

function PlayGame() {

    const text = "HUMBLE";
    const usedLetters = ['B', 'E']

    return (

        <div>
            <h1> Play Game</h1>
            <MaskedText text={text} usedLetters={usedLetters} />
            <hr />
            <LetterButtons usedLetters={usedLetters} />


            <hr />


            <Link to="/start">Start Game</Link>
        </div>
    )
}

export default PlayGame;
import { Link } from "react-router-dom"
import MaskedText from "../../components/MaskedText/MaskedText";

function PlayGame() {

    const text = "HUMBLE";
    const usedLetters = ['B', 'E']

    return (

        <div>
            <h1> Play Game</h1>
            <MaskedText text={text} usedLetters={usedLetters}/>
            <hr/>
            <Link to="/start">Start Game</Link>
        </div>
    )
}

export default PlayGame;
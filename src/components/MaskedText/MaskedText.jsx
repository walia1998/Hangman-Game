/**
 * @param {text} The word to be guessed
 * @param {usedLetters} The letters that have been guessed so for 
 * 
 */

import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters }) {
    const letters = getAllCharacters(text, usedLetters).split('');

    return(
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
                )
            })}
        </>
    )

}



export default MaskedText;
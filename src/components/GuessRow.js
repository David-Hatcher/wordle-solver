import DoneScoring from "./DoneScoring";
import React, { useState } from 'react';


const { default: LetterBox } = require("./LetterBox");


const GuessRow = (props) => {
    let letterCount = 5
    let letters = props.letters
    const [colors,setColors] = useState(Array(letterCount))
    const handleSumbit = () => {
        props.checkClicked(colors.join(''))
    }
    
    const setColor = (index,color) => {
        let newColors = colors
        newColors[index] = color
        setColors(newColors)
    }
    let letterBoxes = Array.from({ length: letterCount }, (_,i) => <LetterBox key={i} letter={letters[i]} setParentColors={setColor} index={i} disabled={props.disabled}/>)
    return (
        <div className='flex ml-auto mr-auto'>
            {letterBoxes}
            <DoneScoring handleClick={handleSumbit} disabled={props.disabled}/>
        </div>
    )
}

export default GuessRow;
import React, { useState, useEffect } from 'react';

import '../styles/letterbox.css'

const LetterBox = (props) => {
    const [color, setColor] = useState(0)
    let colors = ['wrong-character','correct-character','in-correct-place']

    useEffect(() => {
        props.setParentColors(props.index,getColor())
    },[color])

    const changeColor = () => {
        switch (color) {
            case 0:
                setColor(1)
                break;
            case 1:
                setColor(2)
                break;
            case 2: 
                setColor(0)
                break;
            default:
                break;
        }
    }

    const getColor = () => {
        switch (color) {
            case 0:
                return 'n';
            case 1:
                return 'y';
            case 2:
                return 'g';
            default:
                break;
        }
    }

    return (
        <div className={`letter-box border-2 border-slate-400 h-12 w-12 rounded-md mt-10 mr-2 ${colors[color]} text-4xl flex items-center justify-center ${props.disabled ? 'disabled' : ''}`} onClick={changeColor}>
            <span className='letter'>
                {props.letter ?? '#'}
            </span>
        </div>
    )
}

export default LetterBox
import React from 'react'

const PossibleMistake = (props) => {
    return (
        <div className='flex-col ml-auto mr-auto mt-10 text-center'>
            <p className='text-3xl px-14 text-center'>Sorry but it seems like you made a mistake or maybe I don't know the word :( click reset to try again.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-self-center mt-5" onClick={props.onclick}>Reset</button>
        </div>
    )
}

export default PossibleMistake;
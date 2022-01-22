import React, { useState } from 'react'
import img from '../assets/infobox.png'
import headercss from '../styles/header.css'
import Modal from './Modal2.js'

const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='mx-auto mt-8 ml-auto mr-auto flex justify-center'>
            <header>
                <h1 className='text-3xl'>Wordle Solver</h1>
            </header>
            <img className='ml-5 photo w-8 h-8 mt-1' src={img} height={'24px'} onClick={() => setShow(true)}/>
            <Modal show={show} onClose={() => setShow(false)}/>
        </div>
    )
}

export default Header
import modalcss from '../styles/modal.css'
import React from 'react'


const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 classname='modal-title'>How to use</h4>
                </div>
                <div className='modal-body'>
                    this is the modal content
                </div>
                <div className='modal-footer'>
                    <button className='button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
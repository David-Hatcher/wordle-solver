import React from 'react'


const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-700 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-gray-300">
                        How To Use
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={props.onClose}
                    >
                        <p className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </p>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <ul className="my-4 mx-4 text-gray-300 text-lg leading-relaxed list-decimal">
                        <li>Enter the first word on Wordle</li>
                        <li>Click the letters until the colors match the response given by Wordle</li>
                        <li>Click the green check to get your next word</li>
                        <li>Repeat!</li>
                    </ul>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-lime-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={props.onClose}
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal;
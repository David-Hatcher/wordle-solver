    import './App.css';
    import React, { useState, useRef, useEffect} from 'react';
    import Header from './components/Header';
    import GuessRow from './components/GuessRow';
    import wordsListFull from './scripts/WordList.js'
    import PossibleMistake from './components/PossibleMistake';
    import Finished from './components/Finished';

const App = () => {
    useEffect(() => {
        document.title = 'Wordle Solver'; 
    }, []);
    const [wordList,setWordList] = useState(wordsListFull)
    const [errorFound,setErrorFound] = useState(false)
    const [words, setWords] = useState([['S','O','A','R','E']])
    const [guesses, setGuesses] = useState(1)
    const firstRender = useRef(true)
    const [solved,setSolved] = useState(false)
    let currentWord = words[guesses - 1].join('').toLowerCase()
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else if (!errorFound){
            setWords(w => [...w,...[getNewWord(guesses)]])
            setGuesses(guesses + 1)            
        }
    },[wordList])

    const reset = () => {
        setWordList(wordsListFull)
        setErrorFound(false)
        setWords([['S','O','A','R','E']])
        setGuesses(1)
        setSolved(false)
        firstRender.current = true
    }
    
    const getNewWord = (guessCount) => {
        if (guessCount === 1) {
            return ['B','U','I','L','T']
        } else {
            return getRandomWordFromList(wordList)
        }
    }
    
    const getRandomWordFromList = (wordsList) => {
        let index = Math.floor(Math.random() * wordsList.length)
        return wordsList[index].toUpperCase().split('')
    }
    
    
    const trimWords = (words,score,guess) => {
        let wordsLocal = [...words];
        let greenLetters = []
        for (let i = 0; i < score.length; i++){
            let scoreLetter = score[i]
            try {
                if (scoreLetter === 'g') {
                    greenLetters.push(scoreLetter)
                    wordsLocal = wordsLocal.filter( (word) => word[i] === guess[i] )
                } else if (scoreLetter === 'n') {
                    wordsLocal = wordsLocal.filter( (word) => !word.includes(guess[i]) || word.split(guess[i]).length - 1 !== guess.split(guess[i]).length -1 )
                } else if (scoreLetter === 'y') {
                    wordsLocal = wordsLocal.filter( (word) => word.includes(guess[i]) && word[i] !== guess[i] )
                    if (greenLetters.includes(guess[i])) {
                        wordsLocal = wordsLocal.filter( (word) => word.split(guess[i]).length - 1 === guess.split(guess[i]).length -1 )
                    }
                }
            } catch (error) {
                setErrorFound(true)
                console.log("no more words")
                break
            }
        }
        if (wordsLocal.length === 0) {
            setErrorFound(true)
        }
        if (!errorFound) {
            setWordList(wordsLocal)
        }
    }
    const checkClicked = (score) => {
        if (score === 'ggggg') {
            setSolved(true)
        } else {
            trimWords(wordList,score,currentWord)
        }
    }

    const getPage = (errorFound,solved) => {
        if (errorFound) {
            return <PossibleMistake onclick={reset}/>
        } else if (solved) {
            return <Finished onclick={reset}/>
        } else {
            return Array.from( {length: guesses}, (_,i) => <GuessRow letters={words[i]} checkClicked={checkClicked} key={i} disabled={i !== guesses - 1}/> )
        }
    }
    
    return (
        <div className='App-header flex h-screen items-start'>
            <div className='w-full'>
                <Header/>
                <div className='flex justify-center flex-col'>
                    {getPage(errorFound,solved)}
                </div>
            </div>
        </div>
    );
}

    export default App;

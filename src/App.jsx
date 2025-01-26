import { useState } from 'react'

import languages from "./data/languages.js"
import { getFarewellText, getRandomWord } from "./data/messages.js"
import Confetti from "react-confetti"

function App()
{
    // State Values
    const [currentWord, setCurrentWord] = useState(function () { return getRandomWord() })
    const [guessedLetter, setGuessedLetter] = useState([])

    // Derived values
    const wrongGuessCount = guessedLetter.filter(function (letter) { return !currentWord.includes(letter) }).length

    const isGameLost = wrongGuessCount >= 9
    const isGameWon = currentWord.split("").every(function (letter) { return guessedLetter.includes(letter) })

    const lastGuessLetter = guessedLetter[guessedLetter.length - 1]
    const islastGuessIncorrect = lastGuessLetter && !currentWord.includes(lastGuessLetter)

    console.log(islastGuessIncorrect)

    const isGameOver = isGameLost || isGameWon

    // Static Values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function onGuessLetter(letter)
    {
        setGuessedLetter(function (prevLetter)
        {
            return prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
        })

    }

    function startNewGame()
    {
        setCurrentWord(getRandomWord())
        setGuessedLetter([])
    }

    return (
        <>

            {isGameWon && <Confetti />}
            <header className='p-3'>
                <h1 className='text-2xl font-mono'>Hangman: Dev Edition</h1>
                <p className='text-gray-200'>Guess the word in under 9 attempts to keep the programming world safe from Assembly!</p>
            </header>
            {!isGameOver && wrongGuessCount === 0 ? (
                <section className="bg-blue-600 p-2 mt-4 mb-9 rounded-md">
                    <p className="text-lg">Choose a letter :D</p>
                </section>
            ) : isGameWon && isGameOver ? (
                <section className="bg-green-500 p-2 mt-4 mb-9 rounded-md">
                    <h1 className="text-lg">You won!</h1>
                    <p className="text-lg">sheeeesh</p>
                </section>
            ) : isGameLost && isGameOver ? (
                <section className="bg-red-500 p-2 mt-4 mb-9 rounded-md">
                    <h1 className="text-lg">You lost!</h1>
                    <p className="text-lg">dumbass, answer was "{currentWord}"</p>
                </section>
            ) : !isGameOver && islastGuessIncorrect ? (
                <section className="bg-purple-500 p-2 mt-4 mb-9 rounded-md">
                    <p className="text-lg">
                        {getFarewellText(languages[wrongGuessCount - 1].name)}
                    </p>
                </section>
            ) : (
                <section className="bg-blue-600 p-2 mt-4 mb-9 rounded-md">
                    <p className="text-lg">You chose the correct letter!</p>
                </section>
            )}


            <section className='flex flex-wrap gap-1 justify-center '>
                {languages.map(function (language, index)
                {

                    const isLanguageLost = index < wrongGuessCount

                    return (<span style={{
                        backgroundColor: language.backgroundColor,
                        color: isLanguageLost ? "#fff" : language.color
                    }}
                        className={`p-1 rounded-sm gap relative ${isLanguageLost ? "lost" : ""} `}
                        key={language.name}
                    >{language.name}</span >)
                })}
            </section>

            <section className='my-9'>

                {
                    currentWord.split("").map(function (letter)
                    {
                        return (
                            <span
                                className='text-xl uppercase bg-[#323232] px-4 py-2 border-b-2 m-[0.1rem] size-[3rem]'
                            >{guessedLetter.includes(letter) ? letter.split("") : ""}</span>
                        )
                    })
                }
            </section>
            <section className='flex flex-wrap items-center justify-center'>
                {alphabet.split("").map(function (letter, index)
                {
                    const isGuessed = guessedLetter.includes(letter)
                    const isCorrect = isGuessed && currentWord.includes(letter)
                    const isWrong = isGuessed && !currentWord.includes(letter)

                    const colorStyle = isCorrect ? "bg-green-500" : isWrong ? "bg-red-500" : "bg-yellow-600"
                    return (
                        <button
                            key={index}
                            className={`py-2 px-4 ${colorStyle} text-black uppercase m-1 rounded-sm border-[#e7e6e6] border-[1px] font-semibold cursor-pointer`}
                            onClick={function () { onGuessLetter(letter) }}

                            disabled={isGameOver}
                        > {letter}</button>)
                })}
            </section >

            {isGameOver && <button className='bg-blue-400 text-black py-3 px-19 rounded-md border border-white mt-9 mb-19'
                onClick={function () { startNewGame() }}
            >New Game</button>}
        </>
    )
}

export default App

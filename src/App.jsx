import { useState } from 'react'

import languages from "./data/languages.js"

function App()
{
    return (
        <>
            <header className='p-3'>
                <h1 className='text-2xl font-mono'>Hangman: Dev Edition</h1>
                <p className='text-gray-200'>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>

            <section>
                <h1>You win!</h1>
                <p>Well done! sheeeesh</p>
            </section>

            <section className='flex flex-wrap gap-1 justify-center'>
                {languages.map(function (language)
                {
                    return (<span style={{
                        backgroundColor: language.backgroundColor,
                        color: language.color
                    }}
                        className='p-1 rounded-sm gap '
                        key={language.name}
                    >{language.name}</span >)
                })}
            </section>
        </>
    )
}

export default App

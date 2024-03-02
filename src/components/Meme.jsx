import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "",
    })

    function getNewMeme() {
        const allMemeImages = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage : url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getNewMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div>
                <h1>{meme.topText}</h1>
                <img src={meme.randomImage} className="meme--image" />
                <h1>{meme.bottomText}</h1>
            </div>
        </main>
    )
}
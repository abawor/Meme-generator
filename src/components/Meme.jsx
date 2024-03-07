import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText : "Top text",
        bottomText : "Bottom text",
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
                <label for="top-text">Top Text</label>
                <label for="bottom-text">Bottom Text</label>
                <input 
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="and take my money"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getNewMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme-container">
                {meme.randomImage && <h1 id="top-text">{meme.topText}</h1>}
                {meme.randomImage && <h1 id="bottom-text">{meme.bottomText}</h1>}
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )
}
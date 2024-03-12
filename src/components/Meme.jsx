import React, { useEffect } from "react"
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

    useEffect(() => {
        getNewMeme()
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
            
        })
    )}

    return (
        <main>
            <div className="form">
                <label htmlFor="top-text">Top Text</label>
                <label htmlFor="bottom-text">Bottom Text</label>
                <input 
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="and take my money"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getNewMeme}
                    id="get-new-meme"
                >
                    Get a new meme image
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
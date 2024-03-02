import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    const [url, setUrl] = React.useState("")

    function getNewMeme(event) {
        event.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setUrl(memesArray[randomNumber].url)
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
            <img src={url} className="meme--image" />
        </main>
    )
}
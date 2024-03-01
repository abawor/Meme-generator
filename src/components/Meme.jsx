import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    let url

    function getNewMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <form className="form">
                <div>
                    <label>Top text
                        <input 
                            type="text"
                            placeholder="Shut up"
                            className="form--input"
                        />
                    </label>
                </div>
                <div>
                    <label>Bottom text
                        <input 
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    </label>
                </div>
                <button 
                    className="form--button"
                    onClick={getNewMeme}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img src={url} className="meme--image"></img>
        </main>
    )
}
import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <Routes>
                <Route path={"/*"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
            </Routes>
        </>
    )
}

export default App

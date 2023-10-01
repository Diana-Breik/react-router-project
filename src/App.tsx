import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Header from "./Header.tsx";
//import AddNewCharacter from "./AddNewCharacter.tsx";
import CharacterDetails from "./CharacterDetails.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)
    const addCharacterCallBackmethod =(newCharacter : Character)=>{
        setCharacters(prevState => [...prevState,newCharacter])
    }
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/*"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}/>
                {/*<Route path={"/characters/add"} element={<AddNewCharacter addCharacterCallBackMethod ={addCharacterCallBackmethod}  />}/>*/}
            </Routes>
        </div>
    )
}

export default App

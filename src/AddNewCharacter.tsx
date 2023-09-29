import {Character} from "./characters.ts";
import {ChangeEvent, FormEvent, useState} from "react";


type AddNewCharacterProps = {
    addCharacterCallBackMethod : (newCharacter : Character)=> void
}

export default function AddNewCharacter(props:AddNewCharacterProps){
    const [name, setName]= useState<string>("")
    const [species, setSpecies]= useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }
    function onSpeciesChange(event: ChangeEvent<HTMLInputElement>){
        setSpecies(event.target.value)
    }
    function onCharacterSave(event:FormEvent<HTMLFormElement>){

        event.preventDefault()

       console.log("the new character with name: "+ name + " and species: "+ species+" saved")

        const newcharacter:Character ={
             name: name,
             species:species
        }
        props.addCharacterCallBackMethod(newcharacter)

        setName("")
        setSpecies("")

    }
    return(
        <>
            <h3>
               Form to add a new character
            </h3>
            <form onSubmit={onCharacterSave}>
                <input value={name} onChange={onNameChange}/>
                <br/>
                <input value={species} onChange={onSpeciesChange}/>
                <br/><br/>
                <button type={"submit"}>Save</button>
            </form>
        </>
    )
}
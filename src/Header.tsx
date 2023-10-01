import {Link} from "react-router-dom";
import './App.css'
export default function Header(){
    return(
        <header className={"header"}>

            <h1>
                RICK & MORTY
            </h1>

            <nav>
                <ul>
                    <li><Link to={"/*"}> HOME </Link></li>
                    <li><Link to={"/characters"}> Gallery </Link></li>
                    <li><Link to={"/characters/add"}> Add new character </Link></li>
                </ul>
            </nav>

        </header>
    )
}
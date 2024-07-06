import React from "react";
import DogInfo from "./DogDetails";
import { Link } from "react-router-dom";
import Nav from "./Nav";



const Dogs = ({dogs}) => {
    return(
        <div>
            <Nav dogs={dogs}/>
            {dogs.map((dog, index) =>(
            <Link to={`/dogs/${dog.name.toLowerCase()}`} >
            <>
            <h2>{dog.name}</h2>
            <img src={`/${dog.src}`} alt={dog.name} className="dogImg"/>
            </>
            </Link>
        ))}
            
        </div>
    );
}

export default Dogs;
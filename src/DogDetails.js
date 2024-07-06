import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";

const DogInfo = ({dogs, key}) => {
    const {name} = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    
    

    return(
        
        <div>
            <Nav dogs={dogs}/>
            <h1>Name: {dog.name}</h1>
            <img src = {`/${dog.src}`} />
            <h3>Age: {dog.age}</h3>
            <h4>Facts:</h4> 
            <ul>
            {dog.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
            ))}
            </ul>
        </div>

    )
}

export default DogInfo;
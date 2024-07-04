import React from "react";
import DogInfo from "./DogInfo";

const Dogs = ({dogs}) => {
    return(
    <div>
        {dogs.map((dog, index) =>(
            <DogInfo dog={dog} key={index}/>
        ))}
    </div>
    );
}

export default Dogs;
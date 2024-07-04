import React from "react";

const DogInfo = ({dog, key}) => {
    return(
        <div>
            <h2>Name: {dog.name}</h2>
            <h3>Age: {dog.age}</h3>
            <img src = {`/${dog.src}`} />
            <p>Facts: {dog.facts}</p>
        </div>
    )
}

export default DogInfo;
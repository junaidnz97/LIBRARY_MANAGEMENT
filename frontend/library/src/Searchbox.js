import React from 'react';

const Searchbox = ({Search}) => {
    console.log("here");
    return (
        <div>
            Start->
            <input type = 'search' placeholder = "start date" id="start"/>
            End->
            <input type = 'search' placeholder = "end date" id ="end"/>
            <button type='submit' onClick={Search}>search</button>
        </div>
        
    );
}

export default Searchbox;
import React from 'react';
import {Button} from 'react-bootstrap';

const Aseoutputtable = (props) => {
    console.log("output");
    console.log((props.bname));
    return (
        <tr>
            <td>{props.id + 1}</td>
            <td>{props.bname }</td>
            <td>{props.index }</td>
            <td>{props.bedition}</td>

        </tr>
    );
}

export default Aseoutputtable;

import React from "react";
const Slotmachin = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="slot_inner">
                <h1>{x}{y}{z}</h1>
                <h1>This Emoji Matching</h1>
                </div>
                
            </>
        );
    } else {
        return (
            <>
                <div className="slot_inner">
                <h1>{x}{y}{z}</h1>
                <h1>This Emoji Not Matching</h1>
                </div>
                
            </>
        );

    }


}
export default Slotmachin;
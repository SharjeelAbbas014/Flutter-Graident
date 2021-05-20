import React from 'react'
import './ColorBox.css'
import Draggable from 'react-draggable';

const LineBar = ({ color, pos, colorChange, number, left, right, setColorUpdater }) => {
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    const updateTicker = (e) => {
        // console.log(e.clientX)
        setColorUpdater(scale(e.clientX, left, right, 0, 100), number);
    }
    console.log(pos);
    return (
        <div onClick={e => e.stopPropagation()}>
            <Draggable axis="x" position={{ x: pos, y: -10 }} onDrag={(e) => updateTicker(e)} bounds="parent">
                <div id="ColorBox" style={{ background: color }}>
                    <input type="color" value={color} onChange={(e) => colorChange(e, number)}></input>
                </div>
            </Draggable >
        </div>
    )
}

export default LineBar;
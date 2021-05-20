import React, { useContext, useState } from 'react'
import { SelectedContext } from '../../App'
import arrow from '../../imgs/arrow.png'
import './Direction.css'
const Direction = () => {
    let [selected, setSelected] = useContext(SelectedContext)
    let angles = [0, 45, 90, 135, 180, 225, 270, 315]
    return (
        <div id="directions">
            {
                angles.map((ang, i) => (
                    <div className="iconContainer" id={selected === i ? "selected" : ""} onClick={() => setSelected(i + 0)}><img style={{ transform: `rotate(${ang}deg)` }} src={arrow} /></div>
                ))
            }
        </div>
    )

}

export default Direction;
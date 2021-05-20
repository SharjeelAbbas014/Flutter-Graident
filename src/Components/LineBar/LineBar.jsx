import React, { useContext, useEffect } from 'react'
import ColorBox from '../ColorBox/ColorBox'
import { SizeContext } from '../../App'
import './LineBar.css'
const LineBar = ({ colors, linestring, colorChange, setColorUpdater, addBar }) => {
    const [boxAttributes, setBoxAttributes] = useContext(SizeContext);
    const getClickPosition = (e) => {
        addBar(e.clientX)
    }
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    useEffect(() => {
        const newObj = {
            size: document.getElementById('lineBar').clientWidth,
            left: document.getElementById('lineBar').getBoundingClientRect().left,
            right: document.getElementById('lineBar').getBoundingClientRect().left + document.getElementById('lineBar').clientWidth
        }
        setBoxAttributes(newObj);
    }, [])
    return (
        <div id="lineBar" style={{ background: linestring }} onClick={(e) => getClickPosition(e)}>
            {
                boxAttributes.size !== -1 ? colors.map((col, i) => (
                    <ColorBox color={col.code} left={boxAttributes.left} right={boxAttributes.right} pos={scale(col.pos, 0, 100, 0, boxAttributes.size)} key={i} colorChange={colorChange} number={i} setColorUpdater={setColorUpdater} />
                )) : null}
        </div >
    )
}

export default LineBar;
import React from 'react'
import './Code.css'
const Code = ({ colors, selected }) => {
    console.log(colors);
    let begin, endS;
    switch (selected) {
        case 0:
            begin = "centerLeft";
            endS = "centerRight";
            break;
        case 1:
            begin = "topLeft";
            endS = "bottomRight";
            break;
        case 2:
            begin = "topCenter";
            endS = "bottomCenter";
            break;
        case 3:
            begin = "topRight";
            endS = "bottomLeft";
            break;
        case 4:
            begin = "centerRight";
            endS = "centerLeft";
            break;
        case 5:
            begin = "bottomRight";
            endS = "topLeft";
            break;
        case 6:
            begin = "bottomCenter";
            endS = "topCenter";
            break;
        case 7:
            begin = "bottomLeft";
            endS = "topRight";
            break;
    }
    let stops = "\n"
    let colorsString = "\n"
    for (let i = 0; i < colors.length; i++) {
        stops += "\t\t" + (colors[i].pos / 100).toPrecision(2) + ", \n";
        colorsString += `\t\tColor(0xFF${colors[i].code.slice(1, colors[i].code.length)}), \n`;
    }
    let outStr = `
    decoration: BoxDecoration(
        gradient: LinearGradient(
            stops: [${stops}\t\t],
          begin: Alignment.${begin},
          end: Alignment.${endS},
          colors: [${colorsString}\t\t],
        )
      ),`
    const copyNow = () => {
        navigator.clipboard.writeText(outStr);
        var but = document.getElementById("copyBut");
        but.innerText = "COPIED!"
        setTimeout(() => {
            but.innerText = "COPY"
        }, 2000)
    }
    return (
        <div id="code">
            <div id="incode">
                <pre id="myInput">
                    {outStr}
                </pre>
            </div>
            <button onClick={copyNow} id="copyBut">COPY</button>
        </div>

    )
}

export default Code;
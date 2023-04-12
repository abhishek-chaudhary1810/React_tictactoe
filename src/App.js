import "./App.css";
import { useState } from "react";
function Box({ value, onBoxClick }) {
  return (
    <button className="buttonStyle" onClick={onBoxClick}>
      {value}
    </button>
  );
}
function Board() {
  const [xisnext,xSetisnext]=useState(true);
  const [boxes, setboxes] = useState(Array(9).fill(null));
  function handleClick(i) {
   if(boxes[i]){
    return;
   }
    const nextBoxes = boxes.slice();
    if (xisnext==true){
      nextBoxes[i] = "X";
    }
    else{
      nextBoxes[i]="O";
    }
    setboxes(nextBoxes);
    xSetisnext(!xisnext);
  }
  return (
    <>
      <div className="board-row">
        <Box value={boxes[0]} onBoxClick={()=>handleClick(0)} />
        <Box value={boxes[1]} onBoxClick={()=>handleClick(1)} />
        <Box value={boxes[2]} onBoxClick= {()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Box value={boxes[3]} onBoxClick={()=>handleClick(3)} />
        <Box value={boxes[4]} onBoxClick={()=>handleClick(4)} />
        <Box value={boxes[5]} onBoxClick={()=>handleClick(5)} />
      </div>
      <div className="board-row">
        <Box value={boxes[6]} onBoxClick={()=>handleClick(6)} />
        <Box value={boxes[7]} onBoxClick={()=>handleClick(7)} />
        <Box value={boxes[8]} onBoxClick={()=>handleClick(8)} />
      </div>
    </>
  );
}

export default Board;

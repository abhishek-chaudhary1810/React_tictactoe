import { useState } from "react";
function Box({ value, onBoxClick }) {
  return (
    <button className="buttonStyle" onClick={onBoxClick}>
      {value}
    </button>
  );
}
export default function Board() {
  const [xisnext,xSetisnext]=useState(true);
  const [boxes, setboxes] = useState(Array(9).fill(null));
  //console.log(boxes)
  function handleClick(i) {
   // console.log(boxes[i]);
   if(calculateWinner(boxes) || boxes[i]){
    return;
   }
    const nextBoxes = boxes.slice();
    if (xisnext===true){
      nextBoxes[i] = "X";
    }
    else{
      nextBoxes[i]="O";
    }
    setboxes(nextBoxes);
    xSetisnext(!xisnext);
  }
  const winner=calculateWinner(boxes);
  
  let status = xisnext ? "X" : "O";
  return (
    <>
    <div>
      <h1>Next Player Turn :{status}</h1>
    </div>
    <div>
      <h1>winner is :{winner}
      </h1> </div>
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
function calculateWinner(boxes){
  const lines =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  ];
  for (let i=0;i<lines.length;i++)
  {
    const [a,b,c]=lines[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a];
    }

  }
}
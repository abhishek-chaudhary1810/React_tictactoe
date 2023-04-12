import { useState } from "react";
//top component
export default function Game() {
  const [xIsNext, xSetNext] = useState(true);
  //array of 9 null element in a state initially
  const [moveHistory, setMoveHistory] = useState([Array(9).fill(null)]);

  const currentSquares = moveHistory[moveHistory.length - 1];
  //nextboxes is prop we could use here as we have lifted state up
  function handlePlay(nextBoxes) {
    //appending a state into already existed state
    setMoveHistory([...moveHistory, nextBoxes]);
    //next user turn is determined by setnext as after a move its boolean is flipped
    xSetNext(!xIsNext);
  }
  return (
    <>
      <div>
        {/* Board component is lifted up to Game component and passed 3 props*/}
        <Board xIsNext={xIsNext} boxes={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        {/* ordered list in a div */}
        <ol>{}</ol>
      </div>
    </>
  );
}
//most low level component
function Box({ value, onBoxClick }) {
  return (
    <button className="buttonStyle" onClick={onBoxClick}>
      {value}
    </button>
  );
}
function Board({ xIsNext, boxes, onPlay }) {
  function handleClick(i) {
    //checked initial and winner condition
    if (calculateWinner(boxes) || boxes[i]) {
      return;
    }
    //slice is used to make a copy of array rather than mutating it
    const nextBoxes = boxes.slice();
    if (xIsNext === true) {
      nextBoxes[i] = "X";
    } else {
      nextBoxes[i] = "O";
    }
    onPlay(nextBoxes);
  }
  //declared and store 2 value to show in jsx in Board component

  const winner = calculateWinner(boxes);

  let status = xIsNext ? "X" : "O";
  return (
    <>
      <div>
        <h1>Next Player Turn :{status}</h1>
      </div>
      <div>
        <h1>winner is :{winner}</h1>{" "}
      </div>
      <div className="board-row">
        <Box value={boxes[0]} onBoxClick={() => handleClick(0)} />
        <Box value={boxes[1]} onBoxClick={() => handleClick(1)} />
        <Box value={boxes[2]} onBoxClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Box value={boxes[3]} onBoxClick={() => handleClick(3)} />
        <Box value={boxes[4]} onBoxClick={() => handleClick(4)} />
        <Box value={boxes[5]} onBoxClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Box value={boxes[6]} onBoxClick={() => handleClick(6)} />
        <Box value={boxes[7]} onBoxClick={() => handleClick(7)} />
        <Box value={boxes[8]} onBoxClick={() => handleClick(8)} />
      </div>
    </>
  );
}
//javascript function to check if tiktaktoe is completed either by "X" or "O"
//boxes is passed as a prop inside Board component during this calculate winner function call
function calculateWinner(boxes) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a];
    }
  }
}

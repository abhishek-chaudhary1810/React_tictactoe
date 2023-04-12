import "./App.css";

function Box({ value }) {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <button className="buttonStyle" onClick={handleClick}>
      {value}
    </button>
  );
}
function Board() {
  return (
    <>
      <div className="board-row">
        <Box value="1" />
        <Box value="2" />
        <Box value="3" />
      </div>
      <div className="board-row">
        <Box value="4" />
        <Box value="5" />
        <Box value="6" />
      </div>
      <div className="board-row">
        <Box value="7" />
        <Box value="8" />
        <Box value="9" />
      </div>
    </>
  );
}

export default Board;

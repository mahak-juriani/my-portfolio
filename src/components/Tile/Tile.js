import "./Tile.css";
function Tile({ header, subHeader, img, text, position,bgColor }) {
  return (
    <div className={`tile  ${position} ${bgColor}`}>
      <div className="img-parent">
        <img src={img} alt="tile-img"/>
      </div>
      <div className="text-parent">
        <h1>{header}</h1>
        {subHeader ? (<h3>{subHeader}</h3>)  : ""}
        <br/>

        <div className="text">
          {text}
        </div>
      </div>

    </div>
    )
  }
  export default Tile;
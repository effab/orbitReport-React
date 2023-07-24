import satData from "./satData";
import './styling.css';

const Buttons = (props, setSat) => {
    return (
    <div className="flex-container">
      {props.displaySats.map((sat, id) => {
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>{sat} Orbit</button>
        )
      })}
      <button onClick={() => props.setSat(satData)}>{satData.id}All Orbits</button>
    </div>
  );
};

export default Buttons;
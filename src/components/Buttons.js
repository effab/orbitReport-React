import satData from "./satData";

const Buttons = (props, filterByType, setSat, displaySats) => {
    return (
    <div>
      {props.displaySats.map((sat, id) => {
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>{sat} Orbit</button>
        )
      })}
      <button onClick={(satData) => setSat}>All Orbits</button>
    </div>
  );
};

export default Buttons;
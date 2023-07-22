import satData from "./satData";

const Buttons = (props, setSat) => {
    return (
    <div>
      {props.displaySats.map((sat, id) => {
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>{sat} Orbit</button>
        )
      })}
      <button onClick={() => setSat} key={satData}>All Orbits</button>
    </div>
  );
};

export default Buttons;
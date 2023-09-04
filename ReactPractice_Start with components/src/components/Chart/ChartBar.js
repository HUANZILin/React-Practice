import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }}></div>
        {/* {In React component, html style properties are required be set as an object, and if there is '-' in the property name, it should be transform into camel case} */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let totalMaximum = 0;
  if (props.dataPoint !== undefined) {
    const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
    totalMaximum = Math.max(...dataPointValues);
  }

  return (
    <div className="chart">
      {props.dataPoint !== undefined &&
        props.dataPoint.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
    </div>
  );
};

export default Chart;

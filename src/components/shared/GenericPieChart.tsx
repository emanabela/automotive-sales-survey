import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { COLORS } from "../../constants/analyticsConstants";
import { DataPoint } from "../../types/sharedTypes";

type PieChartProps = {
  data: DataPoint[];
  width?: number;
  height?: number;
  outerRadius?: number;
  valueKey?: string;
  nameKey?: string;
};

const GenericPieChart = ({
  data,
  width = 500,
  height = 500,
  outerRadius = 100,
  valueKey = "value",
  nameKey = "name",
}: PieChartProps) => {
  return (
    <div className="flex flex-col items-center mt-6">
      <PieChart width={width} height={height} className="mx-auto mt-4">
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          iconType="circle"
        />
      </PieChart>
    </div>
  );
};

export default GenericPieChart;

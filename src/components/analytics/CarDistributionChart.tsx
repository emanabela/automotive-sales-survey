import { BarChart, Bar, XAxis, YAxis, Tooltip, Brush } from "recharts";
import { CarDistributionType } from "../../types/analyticsTypes";

const CarDistributionChart = ({
  carDistribution,
}: {
  carDistribution: CarDistributionType[];
}) => {
  return (
    <BarChart
      width={600}
      height={400}
      data={carDistribution}
      className="mx-auto mt-4"
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#7480ff" />
      <Brush dataKey="name" />
    </BarChart>
  );
};

export default CarDistributionChart;

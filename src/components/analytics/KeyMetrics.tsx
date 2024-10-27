import { StatsType } from "../../types/analyticsTypes";

const KeyMetrics = ({ stats }: { stats: StatsType }) => {
  const calculatePercentage = (value: number) => {
    return ((value / stats.totalRespondents) * 100).toFixed(2);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card shadow-lg bg-base-100 p-6">
        <p className="text-2xl font-bold">Key Metrics</p>
        <div className="mt-4">
          <p>
            Total Respondents:{" "}
            <span className="font-semibold">{stats.totalRespondents}</span>
          </p>
          <div className="divider my-1"></div>
          <p>
            Adolescents:{" "}
            <span className="font-semibold">{stats.adolescents}</span> -{" "}
            <span className="font-semibold">
              {calculatePercentage(stats.adolescents)}%
            </span>
          </p>
          <p>
            Unlicensed:{" "}
            <span className="font-semibold">{stats.unlicensed}</span> -{" "}
            <span className="font-semibold">
              {calculatePercentage(stats.unlicensed)}%
            </span>
          </p>
          <p>
            First Timers:{" "}
            <span className="font-semibold">{stats.firstTimers}</span> -{" "}
            <span className="font-semibold">
              {calculatePercentage(stats.firstTimers)}%
            </span>
          </p>
          <p>
            Licensed without cars:{" "}
            <span className="font-semibold">{stats.licenseWithoutCars}</span> -{" "}
            <span className="font-semibold">
              {calculatePercentage(stats.licenseWithoutCars)}%
            </span>
          </p>
          <p>
            Targetables:{" "}
            <span className="font-semibold">{stats.targetables}</span> -{" "}
            <span className="font-semibold">
              {calculatePercentage(stats.targetables)}%
            </span>
          </p>
          <div className="divider my-1"></div>
          <p>
            Targetables that care about fuel emissions:{" "}
            <span className="font-semibold">
              {stats.careAboutFuelEmissions.toFixed(2)}%
            </span>
          </p>
          <p>
            Targetables that pick "FWD" or "I don’t know" for drivetrain:{" "}
            <span className="font-semibold">
              {stats.drivetrainPreference.toFixed(2)}%
            </span>
          </p>
          <div className="divider my-1"></div>
          <p>
            Average number of cars per family:{" "}
            <span className="font-semibold">
              {stats.averageCars.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <div className="card shadow-lg bg-base-100 p-6">
        <p className="text-2xl font-bold">Car Make and Model Distribution</p>
        <ul className="mt-4">
          {stats.carDistribution.map((car) => (
            <li key={car.name} className="flex justify-between">
              <span>{car.name}</span>
              <span className="font-semibold">{car.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyMetrics;

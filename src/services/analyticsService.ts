import { DataPoint, SurveyForm } from "../types/sharedTypes";
import { DrivetrainDistributionType, StatsType } from "../types/analyticsTypes";

export const calculateStats = (data: SurveyForm[]): StatsType | null => {
  if (!data || data.length === 0) return null;

  const adolescents = data.filter(
    (entry) => entry.age !== null && entry.age < 18,
  ).length;
  const unlicensed =
    data.filter((entry) => entry.hasLicense === false).length || 0;
  const firstTimers = data.filter((entry) => entry.firstCar).length;
  const licenseWithoutCars = data.filter(
    (entry) =>
      entry.hasLicense === true &&
      entry.firstCar === null &&
      entry.numberOfCars === 0,
  ).length;
  const targetables = data.filter(
    (entry) => entry.hasLicense === true && entry.numberOfCars > 0,
  );
  const targetablesLength = targetables.length;

  const drivetrainDistribution: DrivetrainDistributionType[] =
    targetables.reduce((acc, entry) => {
      const drivetrain = entry.drivetrain;
      if (drivetrain) {
        const existing = acc.find((d) => d.name === drivetrain);
        if (existing) {
          existing.value += 1;
        } else {
          acc.push({ name: drivetrain, value: 1 });
        }
      }
      return acc;
    }, [] as DrivetrainDistributionType[]);

  const percentageCareFuelEmissions =
    (targetables.filter((entry) => entry.worriedAboutEmissions).length /
      targetablesLength) *
    100;
  const percentageDrivetrainPreference =
    (targetables.filter(
      (entry) =>
        entry.drivetrain === "FWD" || entry.drivetrain === "I don’t know",
    ).length /
      targetablesLength) *
    100;

  const averageCars =
    data.reduce((sum, entry) => sum + entry.numberOfCars, 0) /
    targetablesLength;

  const carMap: { [key: string]: number } = {};
  data.forEach((entry) => {
    entry.cars.forEach((car) => {
      const carName = `${car.make} ${car.model}`;
      carMap[carName] = (carMap[carName] || 0) + 1;
    });
  });
  const carDistribution = Object.keys(carMap).map((carName) => ({
    name: carName,
    count: carMap[carName],
  }));

  return {
    totalRespondents: data.length,
    adolescents,
    unlicensed,
    firstTimers,
    licenseWithoutCars,
    targetables: targetablesLength,
    careAboutFuelEmissions: percentageCareFuelEmissions,
    drivetrainPreference: percentageDrivetrainPreference,
    averageCars,
    carDistribution,
    drivetrainDistribution,
  };
};

export const getRespondentDistributionPieChartData = (
  stats: StatsType,
): DataPoint[] => {
  return [
    { name: "Adolescents", value: stats.adolescents },
    { name: "Unlicensed", value: stats.unlicensed },
    { name: "First Timers", value: stats.firstTimers },
    { name: "Targetables", value: stats.targetables },
    { name: "Licensed without cars", value: stats.licenseWithoutCars },
  ];
};

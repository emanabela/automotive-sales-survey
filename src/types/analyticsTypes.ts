import { Drivetrain } from "./sharedTypes";

export type CarDistributionType = {
  name: string;
  count: number;
};

export type DrivetrainDistributionType = {
  name: Drivetrain;
  value: number;
};

export type StatsType = {
  totalRespondents: number;
  adolescents: number;
  unlicensed: number;
  firstTimers: number;
  licenseWithoutCars: number;
  targetables: number;
  careAboutFuelEmissions: number;
  drivetrainPreference: number;
  averageCars: number;
  carDistribution: CarDistributionType[];
  drivetrainDistribution: DrivetrainDistributionType[];
};

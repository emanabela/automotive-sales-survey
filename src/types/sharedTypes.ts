export type Gender = "M" | "F" | "Other";
export type Drivetrain = "FWD" | "RWD" | "I don’t know";

export type SurveyForm = {
  age: number | null;
  gender: Gender | null;
  hasLicense: boolean | null;
  firstCar: boolean | null;
  drivetrain: Drivetrain | null;
  worriedAboutEmissions: boolean | null;
  numberOfCars: number;
  cars: {
    make: string;
    model: string;
  }[];
};

export type DataPoint = {
  name: string;
  value: number;
};

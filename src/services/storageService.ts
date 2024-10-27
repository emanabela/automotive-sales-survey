import { localStorageKey } from "../constants/sharedConstants";
import { SurveyForm } from "../types/sharedTypes";

export const getSurveyData = () => {
  const surveyData = localStorage.getItem(localStorageKey);

  return surveyData ? JSON.parse(surveyData) : null;
};

export const appendSurveyData = (formData: SurveyForm) => {
  const surveyData = getSurveyData();

  if (surveyData) {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify([...surveyData, formData]),
    );
  } else {
    localStorage.setItem(localStorageKey, JSON.stringify([formData]));
  }
};

export const appendSurveyDataList = (formDataList: SurveyForm[]) => {
  const surveyData = getSurveyData();

  if (surveyData) {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify([...surveyData, ...formDataList]),
    );
  } else {
    localStorage.setItem(localStorageKey, JSON.stringify(formDataList));
  }
};

export const clearSurveyData = () => {
  localStorage.removeItem(localStorageKey);
};

export const generateRandomSurveyData = (numEntries: number): SurveyForm[] => {
  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomBoolean = () => Math.random() < 0.5;

  const genders: ("M" | "F" | "Other")[] = ["M", "F", "Other"];
  const drivetrains: ("FWD" | "RWD" | "I don’t know")[] = [
    "FWD",
    "RWD",
    "I don’t know",
  ];
  const carMakes = ["Toyota", "Ford", "Chevrolet", "Honda", "BMW"];
  const modelsByMake: { [key: string]: string[] } = {
    Toyota: ["Corolla", "Camry", "Prius"],
    Ford: ["Focus", "Fusion", "Mustang"],
    Chevrolet: ["Malibu", "Impala", "Camaro"],
    Honda: ["Civic", "Accord", "CR-V"],
    BMW: ["X5", "335I", "535D"],
  };

  const generateSurveyEntry = (): SurveyForm => {
    const age = getRandomInt(16, 100);
    const gender = genders[getRandomInt(0, genders.length - 1)];
    const hasLicense = age >= 18 ? getRandomBoolean() : null;

    let firstCar: boolean | null = null;
    if (age >= 18 && age <= 25 && hasLicense) {
      firstCar = getRandomBoolean();
      if (firstCar) {
        return {
          age,
          gender,
          hasLicense,
          firstCar,
          drivetrain: null,
          worriedAboutEmissions: null,
          numberOfCars: 0,
          cars: [],
        };
      }
    }

    const drivetrain =
      age >= 18 && hasLicense && !firstCar
        ? drivetrains[getRandomInt(0, drivetrains.length - 1)]
        : null;
    const worriedAboutEmissions =
      age >= 18 && hasLicense && !firstCar ? getRandomBoolean() : null;
    const numberOfCars =
      age >= 18 && hasLicense && !firstCar ? getRandomInt(0, 5) : 0;
    const cars =
      numberOfCars > 0
        ? Array.from({ length: numberOfCars }, () => {
            const make = carMakes[getRandomInt(0, carMakes.length - 1)];
            const model =
              modelsByMake[make][
                getRandomInt(0, modelsByMake[make].length - 1)
              ];
            return { make, model };
          })
        : [];

    return {
      age,
      gender,
      hasLicense,
      firstCar,
      drivetrain,
      worriedAboutEmissions,
      numberOfCars,
      cars,
    };
  };

  return Array.from({ length: numEntries }, generateSurveyEntry);
};

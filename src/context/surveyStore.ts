import { create } from "zustand";
import { Drivetrain, Gender, SurveyForm } from "../types/sharedTypes";

interface SurveyState {
  formData: SurveyForm;
  setAge: (age: number) => void;
  setGender: (gender: Gender) => void;
  setHasLicense: (hasLicense: boolean) => void;
  setFirstCar: (firstCar: boolean) => void;
  setDrivetrain: (drivetrain: Drivetrain) => void;
  setWorriedAboutEmissions: (worried: boolean) => void;
  setNumberOfCars: (num: number) => void;
  setCar: (index: number, make: string, model: string) => void;
  isNextDisabled: boolean;
  setIsNextDisabled: (isNextDisabled: boolean) => void;
  step: number;
  increaseStep: () => void;
  decreaseStep: () => void;
  resetForm: () => void;
}

const useSurveyStore = create<SurveyState>((set) => ({
  formData: {
    age: null,
    gender: null,
    hasLicense: null,
    firstCar: null,
    drivetrain: null,
    worriedAboutEmissions: null,
    numberOfCars: 0,
    cars: [],
  },
  setAge: (age) =>
    set((state) => ({
      formData: { ...state.formData, age },
    })),
  setGender: (gender) =>
    set((state) => ({
      formData: { ...state.formData, gender },
    })),
  setHasLicense: (hasLicense) =>
    set((state) => ({
      formData: { ...state.formData, hasLicense },
    })),
  setFirstCar: (firstCar) =>
    set((state) => ({
      formData: { ...state.formData, firstCar },
    })),
  setDrivetrain: (drivetrain) =>
    set((state) => ({
      formData: { ...state.formData, drivetrain },
    })),
  setWorriedAboutEmissions: (worried) =>
    set((state) => ({
      formData: { ...state.formData, worriedAboutEmissions: worried },
    })),
  setNumberOfCars: (num) =>
    set((state) => ({
      formData: {
        ...state.formData,
        numberOfCars: num,
        cars: Array(num).fill({ make: "", model: "" }),
      },
    })),
  setCar: (index, make, model) =>
    set((state) => {
      const cars = [...state.formData.cars];
      cars[index] = { make, model };
      return {
        formData: { ...state.formData, cars },
      };
    }),
  isNextDisabled: true,
  setIsNextDisabled: (isNextDisabled) =>
    set(() => ({
      isNextDisabled: isNextDisabled,
    })),
  step: 1,
  increaseStep: () =>
    set((state) => ({
      step: Math.min(state.step + 1, 8),
    })),
  decreaseStep: () =>
    set((state) => ({
      step: Math.max(state.step - 1, 1),
    })),
  resetForm: () =>
    set(() => ({
      formData: {
        age: null,
        gender: null,
        hasLicense: null,
        firstCar: null,
        drivetrain: null,
        worriedAboutEmissions: null,
        numberOfCars: 0,
        cars: [],
      },
      isNextDisabled: true,
      step: 1,
    })),
}));

export default useSurveyStore;

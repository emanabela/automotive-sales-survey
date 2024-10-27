import toast from "react-hot-toast";
import router from "../utils/Router";
import { MESSAGES } from "../constants/messageConstants";
import useMessageStore from "../context/messageStore";
import { appendSurveyData } from "./storageService";
import useSurveyStore from "../context/surveyStore";
import {
  specialSeriesPattern,
  standardSeriesPattern,
} from "../constants/surveyConstants";

export const handleNext = () => {
  const { formData, step, setIsNextDisabled, increaseStep } =
    useSurveyStore.getState();

  switch (step) {
    case 1:
      setIsNextDisabled(formData.age === null || formData.gender === null);
      increaseStep();
      break;

    case 2:
      setIsNextDisabled(formData.hasLicense === null);
      if (formData.age !== null && formData.age < 18)
        handleSave(MESSAGES.below18);
      increaseStep();
      break;

    case 3:
      setIsNextDisabled(formData.firstCar === null);
      if (formData.hasLicense === false) handleSave(MESSAGES.doNotOwnCar);
      if (formData.age !== null && formData.age > 25) increaseStep();
      increaseStep();
      break;

    case 4:
      setIsNextDisabled(formData.drivetrain === null);
      if (formData.firstCar === true)
        handleSave(MESSAGES.targetingExperiencedClient);
      increaseStep();
      break;

    case 5:
      setIsNextDisabled(formData.worriedAboutEmissions === null);
      increaseStep();
      break;

    case 6:
      increaseStep();
      break;

    case 7:
      setIsNextDisabled(true);
      if (formData.numberOfCars === 0) handleSave(MESSAGES.saved);
      increaseStep();
      break;

    case 8:
      if (validateCarModels()) handleSave(MESSAGES.saved);
      break;

    default:
      break;
  }
};

const validateCarModels = () => {
  const { formData } = useSurveyStore.getState();
  if (!formData.cars.some((car) => car.make || car.model)) return true;

  const validationConfig: Record<string, (model: string) => boolean> = {
    BMW: validateBMWModels,
    // Further validations can be added here, for example:
    // Audi: validateAudiModels,
  };

  for (const { make, model } of formData.cars) {
    if (make && model && validationConfig[make]) {
      if (!validationConfig[make](model)) return false;
    }
  }
  return true;
};

const validateBMWModels = (model: string) => {
  const normalizedModel = model.toLowerCase();

  if (
    standardSeriesPattern.test(normalizedModel) ||
    specialSeriesPattern.test(normalizedModel)
  ) {
    return true;
  }

  toast.error(MESSAGES.invalidModal);
  return false;
};

export const handleBack = () => {
  const { decreaseStep, setIsNextDisabled, step, formData } =
    useSurveyStore.getState();

  if (step === 5 && formData.age !== null && formData.age > 25) decreaseStep();

  decreaseStep();
  setIsNextDisabled(false);
};

export const handleSave = (message: string) => {
  const { formData } = useSurveyStore.getState();
  appendSurveyData(formData);
  useMessageStore.getState().setMessage(message);
  router.navigate("/message");
};

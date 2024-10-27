import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Age from "../components/survey/Age";
import CarMakeModel from "../components/survey/CarMakeModel";
import CarsInFamily from "../components/survey/CarsInFamily";
import FuelEmissionsConcern from "../components/survey/FuelEmissionsConcern";
import GenderSelect from "../components/survey/GenderSelect";
import HasLicense from "../components/survey/HasLicense";
import IsFirstCar from "../components/survey/IsFirstCar";
import PreferredDrivetrain from "../components/survey/PreferredDrivetrain";
import useSurveyStore from "../context/surveyStore";
import { handleBack, handleNext } from "../services/surveyService";

const stepComponents: { [key: number]: () => JSX.Element } = {
  1: Age,
  2: GenderSelect,
  3: HasLicense,
  4: IsFirstCar,
  5: PreferredDrivetrain,
  6: FuelEmissionsConcern,
  7: CarsInFamily,
  8: CarMakeModel,
};

const SurveyForm = () => {
  const navigate = useNavigate();
  const { isNextDisabled, step, formData, setIsNextDisabled } =
    useSurveyStore();

  useEffect(() => {
    if (step !== 8) return;
    const areAllCarsFilled = formData.cars.some(
      (car) => !car.make || !car.model,
    );
    setIsNextDisabled(areAllCarsFilled);
  }, [formData.cars, setIsNextDisabled, step]);

  const CurrentStepComponent = stepComponents[step];

  return (
    <>
      <div className="flex items-start">
        <button className="mr-2 text-2xl" onClick={() => navigate("/")}>
          ❮
        </button>
        <p className="text-2xl font-bold text-center mb-4">
          Automotive Sales Survey
        </p>
      </div>

      <div className="form-control">
        {CurrentStepComponent && <CurrentStepComponent />}

        <div className="flex justify-between">
          <button
            className="btn btn-secondary mt-4 w-[40%]"
            onClick={handleBack}
            disabled={step === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-primary mt-4 w-[40%]"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            {step === 8 ? "Save" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SurveyForm;

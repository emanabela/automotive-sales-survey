import useSurveyStore from "../../context/surveyStore";
import { Drivetrain } from "../../types/sharedTypes";

const PreferedDrivetrain = () => {
  const { formData, setDrivetrain, setIsNextDisabled } = useSurveyStore();

  const onChange = (drivetrain: Drivetrain) => {
    setDrivetrain(drivetrain);
    setIsNextDisabled(!(drivetrain !== null));
  };
  return (
    <>
      <label className="label">What is your preferred drivetrain?</label>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="drivetrain"
            value="FWD"
            className="radio radio-primary"
            checked={formData.drivetrain === "FWD"}
            onChange={() => onChange("FWD")}
          />
          <span>FWD</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="drivetrain"
            value="RWD"
            className="radio radio-primary"
            checked={formData.drivetrain === "RWD"}
            onChange={() => onChange("RWD")}
          />
          <span>RWD</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="drivetrain"
            value="I don’t know"
            className="radio radio-primary"
            checked={formData.drivetrain === "I don’t know"}
            onChange={() => onChange("I don’t know")}
          />
          <span>I don’t know</span>
        </label>
      </div>
    </>
  );
};

export default PreferedDrivetrain;

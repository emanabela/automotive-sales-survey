import useSurveyStore from "../../context/surveyStore";

const HasLicense = () => {
  const { formData, setFirstCar, setIsNextDisabled } = useSurveyStore();

  const onChange = (isFirstCar: boolean) => {
    setFirstCar(isFirstCar);
    setIsNextDisabled(!(isFirstCar !== null));
  };

  return (
    <>
      <label className="label">Is this your first car?</label>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="hasLicense"
            value="yes"
            className="radio radio-primary"
            checked={formData.firstCar === true}
            onChange={() => onChange(true)}
          />
          <span>Yes</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="hasLicense"
            value="no"
            className="radio radio-primary"
            checked={formData.firstCar === false}
            onChange={() => onChange(false)}
          />
          <span>No</span>
        </label>
      </div>
    </>
  );
};

export default HasLicense;

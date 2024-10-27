import useSurveyStore from "../../context/surveyStore";

const HasLicense = () => {
  const { formData, setHasLicense, setIsNextDisabled } = useSurveyStore();

  const onChange = (hasLicense: boolean) => {
    setHasLicense(hasLicense);
    setIsNextDisabled(!(hasLicense !== null));
  };

  return (
    <>
      <label className="label">Do you own a car driving license?</label>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="hasLicense"
            value="yes"
            className="radio radio-primary"
            checked={formData.hasLicense === true}
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
            checked={formData.hasLicense === false}
            onChange={() => onChange(false)}
          />
          <span>No, I prefer using other transport</span>
        </label>
      </div>
    </>
  );
};

export default HasLicense;

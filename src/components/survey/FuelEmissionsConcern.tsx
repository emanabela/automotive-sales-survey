import useSurveyStore from "../../context/surveyStore";

const FuelEmissionsConcern = () => {
  const { formData, setWorriedAboutEmissions, setIsNextDisabled } =
    useSurveyStore();

  const onChange = (worried: boolean) => {
    setWorriedAboutEmissions(worried);
    setIsNextDisabled(!(worried !== null));
  };

  return (
    <>
      <label className="label">Do you worry about fuel emissions?</label>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="worriedAboutEmissions"
            value="yes"
            className="radio radio-primary"
            checked={formData.worriedAboutEmissions === true}
            onChange={() => onChange(true)}
          />
          <span>Yes</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="worriedAboutEmissions"
            value="no"
            className="radio radio-primary"
            checked={formData.worriedAboutEmissions === false}
            onChange={() => onChange(false)}
          />
          <span>No</span>
        </label>
      </div>
    </>
  );
};

export default FuelEmissionsConcern;

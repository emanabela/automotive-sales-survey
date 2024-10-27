import useSurveyStore from "../../context/surveyStore";

const Age = () => {
  const { formData, setAge, setIsNextDisabled } = useSurveyStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value, 10);
    setAge(age);
    setIsNextDisabled(!(age !== null && age >= 0 && age <= 100));
  };

  return (
    <>
      <label className="label">Age</label>
      <input
        type="number"
        className="input input-bordered w-full"
        value={formData.age || ""}
        onChange={handleChange}
        min="0"
        max="100"
      />
    </>
  );
};

export default Age;

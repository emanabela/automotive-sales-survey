import useSurveyStore from "../../context/surveyStore";
import { Gender } from "../../types/sharedTypes";

const GenderSelect = () => {
  const { formData, setGender, setIsNextDisabled } = useSurveyStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value as Gender);
    setIsNextDisabled(!(e.target.value as Gender));
  };

  return (
    <>
      <label className="label">Gender</label>
      <select
        className="select select-bordered w-full"
        value={formData.gender || ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select
        </option>
        <option value="M">M</option>
        <option value="F">F</option>
        <option value="Other">Other</option>
      </select>
    </>
  );
};

export default GenderSelect;

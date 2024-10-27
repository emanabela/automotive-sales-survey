import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useSurveyStore from "../context/surveyStore";
import {
  appendSurveyDataList,
  clearSurveyData,
  generateRandomSurveyData,
} from "../services/storageService";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [numberOfRandomSurveys, setNumberOfRandomSurveys] = useState(10);

  const { resetForm } = useSurveyStore();

  const saveRandomSurveyData = () => {
    const randomSurveyData = generateRandomSurveyData(numberOfRandomSurveys);
    appendSurveyDataList(randomSurveyData);
    toast.success(`${numberOfRandomSurveys} surveys generated`);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-2xl">Home</h1>
      <p>Welcome to the Automotive Sales Survey</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => {
          resetForm();
          navigate("/survey");
        }}
      >
        Start survey
      </button>
      <button
        className="btn btn-secondary mt-4"
        onClick={() => navigate("/analytics")}
      >
        View Analytics
      </button>
      <div className="divider"></div>
      <label className="label">Generate random survey data</label>
      <div className="flex flex-row justify-between">
        <input
          type="number"
          className="input input-bordered w-[20%]"
          placeholder="Number of random surveys"
          value={numberOfRandomSurveys}
          onChange={(e) => setNumberOfRandomSurveys(Number(e.target.value))}
        />
        <button
          className="btn btn-primary w-[70%]"
          onClick={() => {
            saveRandomSurveyData();
          }}
        >
          Generate random survey data
        </button>
      </div>
      <div className="divider"></div>
      <label className="label">Clear survey data</label>
      <button
        className="btn btn-error"
        onClick={() => {
          clearSurveyData();
          toast.success("Survey data cleared");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Home;

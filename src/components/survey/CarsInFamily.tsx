import useSurveyStore from "../../context/surveyStore";

const CarsInFamily = () => {
  const { formData, setNumberOfCars } = useSurveyStore();

  return (
    <>
      <label>How many cars does your family own?</label>
      <div className="flex items-center justify-center space-x-4 pt-4">
        <button
          onClick={() => setNumberOfCars(formData.numberOfCars - 1)}
          className="btn btn-sm btn-circle btn-outline border-red-500 hover:bg-red-500 transition"
          disabled={formData.numberOfCars === 0}
        >
          ➖
        </button>
        <div className="text-lg font-semibold text-gray-800 bg-gray-100 rounded-lg px-4 py-2 w-12 text-center">
          {formData.numberOfCars}
        </div>
        <button
          onClick={() => setNumberOfCars(formData.numberOfCars + 1)}
          className="btn btn-sm btn-circle btn-outline border-green-500 hover:bg-green-500 transition"
        >
          ➕
        </button>
      </div>
    </>
  );
};

export default CarsInFamily;

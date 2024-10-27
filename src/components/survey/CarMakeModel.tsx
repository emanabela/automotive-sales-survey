import useSurveyStore from "../../context/surveyStore";
import { carMakes } from "../../data/data";
import Dropdown from "../shared/Dropdown";

const CarMakeModel = () => {
  const { formData, setCar } = useSurveyStore();

  const handleChange = (index: number, make: string, model: string) => {
    setCar(index, make, model);
  };

  return (
    <>
      <p className="text-center pb-2">
        Enter the make and model of the cars you and your family own.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {formData.cars.map((car, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-md"
          >
            <label className="label">Make</label>
            <Dropdown
              options={carMakes}
              onSelect={(option) => handleChange(index, option, car.model)}
              value={car.make}
            />
            <label className="label">Model</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={car.model || ""}
              onChange={(e) => handleChange(index, car.make, e.target.value)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarMakeModel;

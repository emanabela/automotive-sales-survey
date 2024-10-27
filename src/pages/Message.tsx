import { useNavigate } from "react-router-dom";
import useMessageStore from "../context/messageStore";
import useSurveyStore from "../context/surveyStore";

const Message = () => {
  const navigate = useNavigate();
  const { message } = useMessageStore();
  const { resetForm } = useSurveyStore();

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-center">{message}</h2>
      <div className="flex justify-between">
        <button
          className="btn btn-primary mt-4 w-[40%]"
          onClick={() => {
            resetForm();
            navigate("/survey");
          }}
        >
          Start new survey
        </button>
        <button
          className="btn btn-secondary mt-4 w-[40%]"
          onClick={() => navigate("/")}
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default Message;

import { createBrowserRouter } from "react-router-dom";
import AnalyticsView from "../pages/AnalyticsView";
import Home from "../pages/Home";
import Message from "../pages/Message";
import Survey from "../pages/Survey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  {
    path: "/analytics",
    element: <AnalyticsView />,
  },
]);

export default router;

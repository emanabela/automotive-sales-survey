import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./utils/Router";

export default function App() {
  return (
    <>
      <div className="h-full w-full flex items-center">
        <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-4">
          <RouterProvider router={router} />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
